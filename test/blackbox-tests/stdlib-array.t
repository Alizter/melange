Test cases for stdlib Array

  $ . ./setup.sh
  $ cat > x.ml <<EOF
  > let t = Array.create_float 10
  > let t2 = Array.init 10 Fun.id
  > let m: unit Js.undefined array array = Array.make_matrix 2 2 Js.undefined
  > let x = Array.append [| 2 |] [| 3 |]
  > let c = Array.concat [ [|1|]; [|2|] ]
  > let s = Array.sub c 1 1
  > let s2 = Array.copy s
  > let () = Array.fill s 0 2 42
  > (* floatarray *)
  > let fl = Array.Floatarray.create 3
  > let () =
  >   for i = 0 to 2 do
  >     Array.Floatarray.unsafe_set fl i 42.
  >   done
  > EOF

  $ melc x.ml
  // Generated by Melange
  'use strict';
  
  var Caml_array = require("melange.js/caml_array.js");
  var Stdlib__Array = require("melange/array.js");
  
  var t = Caml_array.make_float(10);
  
  var t2 = Stdlib__Array.init(10, (function (prim) {
          return prim;
        }));
  
  var m = Stdlib__Array.make_matrix(2, 2, undefined);
  
  var x = Stdlib__Array.append([2], [3]);
  
  var c = Stdlib__Array.concat({
        hd: [1],
        tl: {
          hd: [2],
          tl: /* [] */0
        }
      });
  
  var s = Stdlib__Array.sub(c, 1, 1);
  
  var s2 = Stdlib__Array.copy(s);
  
  Stdlib__Array.fill(s, 0, 2, 42);
  
  var fl = Caml_array.make_float(3);
  
  for(var i = 0; i <= 2; ++i){
    fl[i] = 42;
  }
  
  exports.t = t;
  exports.t2 = t2;
  exports.m = m;
  exports.x = x;
  exports.c = c;
  exports.s = s;
  exports.s2 = s2;
  exports.fl = fl;
  /* t Not a pure module */
