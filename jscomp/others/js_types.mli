(* Copyright (C) 2015-2016 Bloomberg Finance L.P.
 *
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

(*tag::interface_all[]*)
type symbol
(**Js symbol type only available in ES6 *)

type obj_val
type undefined_val
(** This type has only one value [undefined] *)
type null_val
(** This type has only one value [null] *)
type function_val

type _ t =
  | Undefined :  undefined_val t
  | Null : null_val t
  | Boolean : Js.boolean t
  | Number : float t
  | String : string t
  | Function : function_val t
  | Object : obj_val t
  | Symbol : symbol t

val reify_type : 'a -> 'b t * 'b
(** given any value it returns its type and the same value.
    Note that  since ['b t] is GADT, the type system will reify its type automatically,
    for example
    {[
    match reify_type "3" with
    | String, v -> v  ^ " this type safe control flow analysis will infer v as string"
    | _ -> assert false
    ]}
 *)
val test : 'a -> 'b t -> bool
(** {[
  test "x" String = true
  ]}*)
(*end::interface_all[]*)
