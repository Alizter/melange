
  $ . ../setup.sh
  $ cat > dune-project <<EOF
  > (lang dune 3.8)
  > (using melange 0.1)
  > EOF

  $ cat > dune <<EOF
  > (library
  >  (name samplelib)
  >  (modes melange)
  >  (modules samplelib))
  > 
  > (library
  >  (name samplelib_test)
  >  (modes melange)
  >  (modules samplelib_test)
  >  (libraries samplelib))
  > 
  > (melange.emit
  >  (target _out)
  >  (modules)
  >  (libraries samplelib_test))
  > EOF

  $ dune build @melange

  $ cat _build/default/_out/samplelib_test.js
  // Generated by Melange
  'use strict';
  
  var Curry = require("melange.js/curry.js");
  var Samplelib = require("./samplelib.js");
  
  function test3(param) {
    var open = Samplelib.MonadOps(Samplelib.$$Promise);
    return Curry._1(open.$$return, 2);
  }
  
  test3(undefined);
  
  exports.test3 = test3;
  /*  Not a pure module */
  $ node _build/default/_out/samplelib_test.js
