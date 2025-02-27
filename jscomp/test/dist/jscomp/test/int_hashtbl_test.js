// Generated by Melange
'use strict';

var Caml = require("melange.js/caml.js");
var Curry = require("melange.js/curry.js");
var Mt = require("./mt.js");
var Stdlib__Array = require("melange/array.js");
var Stdlib__Hashtbl = require("melange/hashtbl.js");
var Stdlib__List = require("melange/list.js");

function f(H) {
  var tbl = Curry._1(H.create, 17);
  Curry._3(H.add, tbl, 1, /* '1' */49);
  Curry._3(H.add, tbl, 2, /* '2' */50);
  return Stdlib__List.sort((function (param, param$1) {
                return Caml.caml_int_compare(param[0], param$1[0]);
              }), Curry._3(H.fold, (function (k, v, acc) {
                    return {
                            hd: [
                              k,
                              v
                            ],
                            tl: acc
                          };
                  }), tbl, /* [] */0));
}

function g(H, count) {
  var tbl = Curry._1(H.create, 17);
  for(var i = 0; i <= count; ++i){
    Curry._3(H.replace, tbl, (i << 1), String(i));
  }
  for(var i$1 = 0; i$1 <= count; ++i$1){
    Curry._3(H.replace, tbl, (i$1 << 1), String(i$1));
  }
  var v = Curry._3(H.fold, (function (k, v, acc) {
          return {
                  hd: [
                    k,
                    v
                  ],
                  tl: acc
                };
        }), tbl, /* [] */0);
  return Stdlib__Array.of_list(Stdlib__List.sort((function (param, param$1) {
                    return Caml.caml_int_compare(param[0], param$1[0]);
                  }), v));
}

var hash = Stdlib__Hashtbl.hash;

function equal(x, y) {
  return x === y;
}

var Int_hash = Stdlib__Hashtbl.Make({
      equal: equal,
      hash: hash
    });

var suites_0 = [
  "simple",
  (function (param) {
      return {
              TAG: /* Eq */0,
              _0: {
                hd: [
                  1,
                  /* '1' */49
                ],
                tl: {
                  hd: [
                    2,
                    /* '2' */50
                  ],
                  tl: /* [] */0
                }
              },
              _1: f(Int_hash)
            };
    })
];

var suites_1 = {
  hd: [
    "more_iterations",
    (function (param) {
        return {
                TAG: /* Eq */0,
                _0: Stdlib__Array.init(1001, (function (i) {
                        return [
                                (i << 1),
                                String(i)
                              ];
                      })),
                _1: g(Int_hash, 1000)
              };
      })
  ],
  tl: /* [] */0
};

var suites = {
  hd: suites_0,
  tl: suites_1
};

Mt.from_pair_suites("Int_hashtbl_test", suites);

exports.f = f;
exports.g = g;
exports.Int_hash = Int_hash;
exports.suites = suites;
/* Int_hash Not a pure module */
