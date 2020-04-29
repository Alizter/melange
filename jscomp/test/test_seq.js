'use strict';

var Block = require("../../lib/js/block.js");
var Curry = require("../../lib/js/curry.js");
var Caml_obj = require("../../lib/js/caml_obj.js");
var Pervasives = require("../../lib/js/pervasives.js");
var Caml_exceptions = require("../../lib/js/caml_exceptions.js");
var Caml_js_exceptions = require("../../lib/js/caml_js_exceptions.js");

var Bad = Caml_exceptions.create("Test_seq.Bad");

var Help = Caml_exceptions.create("Test_seq.Help");

var Stop = Caml_exceptions.create("Test_seq.Stop");

function assoc3(x, _l) {
  while(true) {
    var l = _l;
    if (l) {
      var match = l[0];
      if (Caml_obj.caml_equal(match[0], x)) {
        return match[1];
      }
      _l = l[1];
      continue ;
    }
    throw {
          ExceptionID: -6,
          Debug: "Not_found"
        };
  };
}

function help_action(param) {
  throw {
        ExceptionID: Stop.ExceptionID,
        _1: /* Unknown */Block.__(0, ["-help"]),
        Debug: Stop.Debug
      };
}

function v(speclist) {
  assoc3("-help", speclist);
  return /* [] */0;
}

function f(g, speclist) {
  return Curry._1(g, assoc3("-help", speclist));
}

function add_help(speclist) {
  var add1;
  try {
    assoc3("-help", speclist);
    add1 = /* [] */0;
  }
  catch (raw_exn){
    var exn = Caml_js_exceptions.internalToOCamlException(raw_exn);
    if (exn.ExceptionID === /* Not_found */-6) {
      add1 = /* :: */[
        /* tuple */[
          "-help",
          /* Unit */Block.__(0, [help_action]),
          " Display this list of options"
        ],
        /* [] */0
      ];
    } else {
      throw exn;
    }
  }
  var add2;
  try {
    assoc3("--help", speclist);
    add2 = /* [] */0;
  }
  catch (raw_exn$1){
    var exn$1 = Caml_js_exceptions.internalToOCamlException(raw_exn$1);
    if (exn$1.ExceptionID === /* Not_found */-6) {
      add2 = /* :: */[
        /* tuple */[
          "--help",
          /* Unit */Block.__(0, [help_action]),
          " Display this list of options"
        ],
        /* [] */0
      ];
    } else {
      throw exn$1;
    }
  }
  return Pervasives.$at(speclist, Pervasives.$at(add1, add2));
}

exports.Bad = Bad;
exports.Help = Help;
exports.Stop = Stop;
exports.assoc3 = assoc3;
exports.help_action = help_action;
exports.v = v;
exports.f = f;
exports.add_help = add_help;
/* No side effect */
