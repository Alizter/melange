Melange can't optimize `external` FFI where arrow type isn't inlined

  $ . ./setup.sh
  $ cat > x.ml <<EOF
  > type t = ?foo:int -> unit -> unit
  > external foo: t = "foo"
  > let () = foo ~foo:42 ()
  > EOF
  $ melc -ppx melppx x.ml
  // Generated by Melange
  'use strict';
  
  var Curry = require("melange.js/curry.js");
  
  Curry._2(foo, 42, undefined);
  
  /*  Not a pure module */

Compared to the inline type, which Melange can uncurry

  $ cat > x.ml <<EOF
  > external foo: ?foo:int -> unit -> unit = "foo"
  > let () = foo ~foo:42 ()
  > EOF
  $ melc -ppx melppx x.ml
  // Generated by Melange
  'use strict';
  
  
  foo(42);
  
  /*  Not a pure module */

