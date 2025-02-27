(* Copyright (C) 2015-2016 Bloomberg Finance L.P.
 * Copyright (C) 2017- Hongbo Zhang, Authors of ReScript
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * In addition to the permissions granted to you by the LGPL, you may combine
 * or link a "work that uses the Library" with a publicly distributed version
 * of this file to produce a combined library or application, then distribute
 * that combined work under the terms of your choosing, with no requirement
 * to comply with the obligations normally placed on you by section 4 of the
 * LGPL version 3 (or the corresponding section of a later version of the LGPL
 * should you choose to use a later version).
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA 02111-1307, USA. *)

let rec iter_warnings_on_stru (stru : Parsetree.structure) =
  match stru with
  | [] -> ()
  | head :: rest -> (
      match head.pstr_desc with
      | Pstr_attribute attr ->
          Builtin_attributes.warning_attribute attr;
          iter_warnings_on_stru rest
      | _ -> ())

let rec iter_warnings_on_sigi (stru : Parsetree.signature) =
  match stru with
  | [] -> ()
  | head :: rest -> (
      match head.psig_desc with
      | Psig_attribute attr ->
          Builtin_attributes.warning_attribute attr;
          iter_warnings_on_sigi rest
      | _ -> ())

type iterator = Ast_iterator.iterator

let super = Ast_iterator.default_iterator

let check_constant loc kind (const : Parsetree.constant) =
  match const with
  | Pconst_string (_, _, Some s) -> (
      match kind with
      | `expr ->
          if Melange_ffi.Utf8_string.is_unescaped s then
            Location.prerr_warning loc (Mel_uninterpreted_delimiters s)
      | `pat ->
          if s = "j" then
            Location.raise_errorf ~loc
              "Unicode string is not allowed in pattern match")
  | Pconst_integer (s, None) -> (
      (* range check using int32
         It is better to give a warning instead of error to avoid make people unhappy.
         It also has restrictions in which platform bsc is running on since it will
         affect int ranges
      *)
      try ignore (Int32.of_string s)
      with _ -> Location.prerr_warning loc Mel_integer_literal_overflow)
  | Pconst_integer (_, Some 'n') ->
      Location.raise_errorf ~loc "literal with `n` suffix is not supported"
  | _ -> ()

module Core_type = struct
  let rec get_uncurry_arity_aux (ty : Parsetree.core_type) acc =
    match ty.ptyp_desc with
    | Ptyp_arrow (_, _, new_ty) -> get_uncurry_arity_aux new_ty (succ acc)
    | Ptyp_poly (_, ty) -> get_uncurry_arity_aux ty acc
    | _ -> acc

  let get_curry_arity ty = get_uncurry_arity_aux ty 0
  let is_arity_one ty = get_curry_arity ty = 1
end

let emit_external_warnings : iterator =
  {
    super with
    expr =
      (fun self a ->
        match a.pexp_desc with
        | Pexp_constant const -> check_constant a.pexp_loc `expr const
        | _ -> super.expr self a);
    value_description =
      (fun self v ->
        match v with
        | ({ pval_loc; pval_prim = "%identity" :: _; pval_type; _ } :
            Parsetree.value_description)
          when not (Core_type.is_arity_one pval_type) ->
            Location.raise_errorf ~loc:pval_loc
              "%%identity expect its type to be of form 'a -> 'b (arity 1)"
        | _ -> super.value_description self v);
    pat =
      (fun self (pat : Parsetree.pattern) ->
        match pat.ppat_desc with
        | Ppat_constant constant -> check_constant pat.ppat_loc `pat constant
        | Ppat_record ([], _) ->
            Location.raise_errorf ~loc:pat.ppat_loc
              "Empty record pattern is not supported"
        | _ -> super.pat self pat);
  }

let emit_external_warnings_on_structure (stru : Parsetree.structure) =
  emit_external_warnings.structure emit_external_warnings stru

let emit_external_warnings_on_signature (sigi : Parsetree.signature) =
  emit_external_warnings.signature emit_external_warnings sigi
