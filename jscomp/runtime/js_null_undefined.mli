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

(** Contains functionality for dealing with values that can be both [null] and [undefined] *)

type +'a t = 'a Js_internal.nullable
(** Local alias for ['a Js.null_undefined] *)

external return : 'a -> 'a t = "%identity"
(** Constructs a value of ['a Js.null_undefined] containing a value of ['a] *)

external isNullable : 'a t -> bool = "#is_nullable"
(** Returns [true] if the given value is [null] or [undefined], [false] otherwise *)

external null : 'a t = "#null"
(** The [null] value of type ['a Js.null_undefined]*)

external undefined : 'a t = "#undefined"
(** The [undefined] value of type ['a Js.null_undefined] *)

module Js := Js_internal

val bind : 'a t -> (('a -> 'b)[@u]) -> 'b t
(** Maps the contained value using the given function

If ['a Js.null_undefined] contains a value, that value is unwrapped, mapped to a ['b] using
the given function [a' -> 'b], then wrapped back up and returned as ['b Js.null_undefined]

{[
let maybeGreetWorld (maybeGreeting: string Js.null_undefined) =
  Js.Undefined.bind maybeGreeting (fun greeting -> greeting ^ " world!")
]}
*)

val iter : 'a t -> (('a -> unit)[@u]) -> unit
(** Iterates over the contained value with the given function

If ['a Js.null_undefined] contains a value, that value is unwrapped and applied to
the given function.

{[
let maybeSay (maybeMessage: string Js.null_undefined) =
  Js.Null_undefined.iter maybeMessage (fun message -> Js.log message)
]}
*)

val fromOption : 'a option -> 'a t
(** Maps ['a option] to ['a Js.null_undefined]

{%html:
<table>
<tr> <td>Some a <td>-> <td>return a
<tr> <td>None <td>-> <td>undefined
</table>
%}
*)

external toOption : 'a t -> 'a option = "#nullable_to_opt"
(** Maps ['a Js.null_undefined] to ['a option]

{%html:
<table>
<tr> <td>return a <td>-> <td>Some a
<tr> <td>undefined <td>-> <td>None
<tr> <td>null <td>-> <td>None
</table>
%}
*)
