  $ cat > input.js <<EOF
  > require(process.env.DUNE_SOURCEROOT + '/_build/default/bin/jsoo_main.bc.js');
  > require(process.env.DUNE_SOURCEROOT + '/_build/default/bin/melange-cmijs.js');
  > console.log(ocaml.compileRE('external foo: (([@mel.uncurry] (unit => unit)) => [@mel.uncurry] (unit => unit)) => unit = "Array.from"'));
  > EOF

  $ node input.js
  File "_none_", line 1, characters 18-29:
  Alert unused: Unused attribute [@mel.uncurry]
  This means such annotation is not annotated properly.
  For example, some annotations are only meaningful in externals
  
  
  File "_none_", line 1, characters 52-63:
  Alert unused: Unused attribute [@mel.uncurry]
  This means such annotation is not annotated properly.
  For example, some annotations are only meaningful in externals
  
  {
    js_code: '// Generated by Melange\n' +
      "/* This output is empty. Its source's type definitions, externals and/or unused code got optimized away. */\n",
    warnings: [],
    type_hints: [
      { start: [Object], end: [Object], kind: 'core_type', hint: 'unit' },
      { start: [Object], end: [Object], kind: 'core_type', hint: 'unit' },
      { start: [Object], end: [Object], kind: 'core_type', hint: 'unit' },
      {
        start: [Object],
        end: [Object],
        kind: 'core_type',
        hint: 'unit -> unit'
      },
      { start: [Object], end: [Object], kind: 'core_type', hint: 'unit' },
      { start: [Object], end: [Object], kind: 'core_type', hint: 'unit' },
      {
        start: [Object],
        end: [Object],
        kind: 'core_type',
        hint: 'unit -> unit'
      },
      {
        start: [Object],
        end: [Object],
        kind: 'core_type',
        hint: '(unit -> unit) -> unit -> unit'
      },
      {
        start: [Object],
        end: [Object],
        kind: 'core_type',
        hint: '((unit -> unit) -> unit -> unit) -> unit'
      }
    ]
  }
