//@ts-check
var P = require("web-tree-sitter");
var fs = require("fs");
var path = require("path");
var j_dir = path.join(__dirname, "..", "jscomp", "core");
var input = path.join(j_dir, "j.ml");
var output;
var mode = "map";

for (let i = 0; i < process.argv.length; ++i) {
  let u = process.argv[i];
  switch (u) {
    case "-fold":
      mode = "fold";
      break;
    case "-record-iter":
      mode = "record-iter";
      break;
    case "-record-map":
      mode = "record-map";
      break;
    case "-record-fold":
      mode = "record-fold";
      break;
    case "-i":
      ++i;
      input = process.argv[i];
      break;
    case "-o":
      ++i;
      output = process.argv[i];
      break;
  }
}
var source = fs.readFileSync(input, "utf8");
var node_types = require("./node_types");

var fold_maker = require("./fold_maker");
var record_iter = require("./record_iter");
var record_map = require("./record_map");
var record_fold = require("./record_fold");
var maker = node_types.maker;

// var p = new P()
(async () => {
  await P.init();
  var p = new P();
  var L = await P.Language.load(path.join(__dirname, "tree-sitter-ocaml.wasm"));
  p.setLanguage(L);
  var out = p.parse(source);
  var typedefs = node_types.getTypedefs(out);
  switch (mode) {
    case "fold":
      fs.writeFileSync(output, maker(fold_maker.make, typedefs), "utf8");
      break;
    case "record-fold":
      fs.writeFileSync(output, maker(record_fold.make, typedefs), "utf8");
      break;
    case "record-iter":
      fs.writeFileSync(output, maker(record_iter.make, typedefs), "utf8");
      break;
    case "record-map":
      fs.writeFileSync(output, maker(record_map.make, typedefs), "utf8");
      break;
  }
})();
