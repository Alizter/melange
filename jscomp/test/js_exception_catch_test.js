'use strict';

var Mt = require("./mt.js");
var Block = require("../../lib/js/block.js");
var Curry = require("../../lib/js/curry.js");
var Js_exn = require("../../lib/js/js_exn.js");
var Caml_exceptions = require("../../lib/js/caml_exceptions.js");
var Caml_js_exceptions = require("../../lib/js/caml_js_exceptions.js");

var suites = {
  contents: /* [] */0
};

var counter = {
  contents: 0
};

function add_test(loc, test) {
  counter.contents = counter.contents + 1 | 0;
  var id = loc + (" id " + String(counter.contents));
  suites.contents = /* :: */[
    /* tuple */[
      id,
      test
    ],
    suites.contents
  ];
  
}

function eq(loc, x, y) {
  return add_test(loc, (function (param) {
                return /* Eq */Block.__(0, [
                          x,
                          y
                        ]);
              }));
}

function false_(loc) {
  return add_test(loc, (function (param) {
                return /* Ok */Block.__(4, [false]);
              }));
}

function true_(loc) {
  return add_test(loc, (function (param) {
                return /* Ok */Block.__(4, [true]);
              }));
}

var exit = 0;

var e;

try {
  e = JSON.parse(" {\"x\"}");
  exit = 1;
}
catch (raw_x){
  var x = Caml_js_exceptions.internalToOCamlException(raw_x);
  if (x.ExceptionID === Js_exn.$$Error.ExceptionID) {
    add_test("File \"js_exception_catch_test.ml\", line 21, characters 10-17", (function (param) {
            return /* Ok */Block.__(4, [true]);
          }));
  } else {
    throw x;
  }
}

if (exit === 1) {
  add_test("File \"js_exception_catch_test.ml\", line 22, characters 16-23", (function (param) {
          return /* Ok */Block.__(4, [false]);
        }));
}

var A = Caml_exceptions.create("Js_exception_catch_test.A");

var B = Caml_exceptions.create("Js_exception_catch_test.B");

var C = Caml_exceptions.create("Js_exception_catch_test.C");

function test(f) {
  try {
    Curry._1(f, undefined);
    return /* No_error */-465676758;
  }
  catch (raw_e){
    var e = Caml_js_exceptions.internalToOCamlException(raw_e);
    if (e.ExceptionID === /* Not_found */-6) {
      return /* Not_found */-358247754;
    } else if (e.ExceptionID === /* Invalid_argument */-3) {
      if (e._1 === "x") {
        return /* Invalid_argument */-50278363;
      } else {
        return /* Invalid_any */545126980;
      }
    } else if (e.ExceptionID === A.ExceptionID) {
      if (e._1 !== 2) {
        return /* A_any */740357294;
      } else {
        return /* A2 */14545;
      }
    } else if (e.ExceptionID === B.ExceptionID) {
      return /* B */66;
    } else if (e.ExceptionID === C.ExceptionID) {
      if (e._1 !== 1 || e._2 !== 2) {
        return /* C_any */-756146768;
      } else {
        return /* C */67;
      }
    } else if (e.ExceptionID === Js_exn.$$Error.ExceptionID) {
      return /* Js_error */634022066;
    } else {
      return /* Any */3257036;
    }
  }
}

eq("File \"js_exception_catch_test.ml\", line 43, characters 5-12", test((function (param) {
            
          })), /* No_error */-465676758);

eq("File \"js_exception_catch_test.ml\", line 44, characters 5-12", test((function (param) {
            throw {
                  ExceptionID: -6,
                  Debug: "Not_found"
                };
          })), /* Not_found */-358247754);

eq("File \"js_exception_catch_test.ml\", line 45, characters 5-12", test((function (param) {
            throw {
                  ExceptionID: -3,
                  _1: "x",
                  Debug: "Invalid_argument"
                };
          })), /* Invalid_argument */-50278363);

eq("File \"js_exception_catch_test.ml\", line 46, characters 5-12", test((function (param) {
            throw {
                  ExceptionID: -3,
                  _1: "",
                  Debug: "Invalid_argument"
                };
          })), /* Invalid_any */545126980);

eq("File \"js_exception_catch_test.ml\", line 47, characters 5-12", test((function (param) {
            throw {
                  ExceptionID: A.ExceptionID,
                  _1: 2,
                  Debug: A.Debug
                };
          })), /* A2 */14545);

eq("File \"js_exception_catch_test.ml\", line 48, characters 5-12", test((function (param) {
            throw {
                  ExceptionID: A.ExceptionID,
                  _1: 3,
                  Debug: A.Debug
                };
          })), /* A_any */740357294);

eq("File \"js_exception_catch_test.ml\", line 49, characters 5-12", test((function (param) {
            throw {
                  ExceptionID: B.ExceptionID,
                  Debug: B.Debug
                };
          })), /* B */66);

eq("File \"js_exception_catch_test.ml\", line 50, characters 5-12", test((function (param) {
            throw {
                  ExceptionID: C.ExceptionID,
                  _1: 1,
                  _2: 2,
                  Debug: C.Debug
                };
          })), /* C */67);

eq("File \"js_exception_catch_test.ml\", line 51, characters 5-12", test((function (param) {
            throw {
                  ExceptionID: C.ExceptionID,
                  _1: 0,
                  _2: 2,
                  Debug: C.Debug
                };
          })), /* C_any */-756146768);

eq("File \"js_exception_catch_test.ml\", line 52, characters 5-12", test((function (param) {
            throw new Error("x");
          })), /* Js_error */634022066);

eq("File \"js_exception_catch_test.ml\", line 53, characters 5-12", test((function (param) {
            throw {
                  ExceptionID: -2,
                  _1: "x",
                  Debug: "Failure"
                };
          })), /* Any */3257036);

Mt.from_pair_suites("Js_exception_catch_test", suites.contents);

exports.suites = suites;
exports.add_test = add_test;
exports.eq = eq;
exports.false_ = false_;
exports.true_ = true_;
exports.A = A;
exports.B = B;
exports.C = C;
exports.test = test;
/*  Not a pure module */
