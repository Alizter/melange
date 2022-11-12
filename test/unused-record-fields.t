Test showing unused record fields error with bs.deriving abstract

  $ cat > main.ml <<EOF
  > type config =
  >   { leading : bool
  >   ; trailing : bool
  >   }
  > [@@bs.deriving abstract]
  > type t
  > external foo: config -> t = "foo"
  > EOF

  $ melc -nopervasives -w @69 main.ml -o main.cmj

When not using bs.deriving abstract it works fine

  $ cat > main.ml <<EOF
  > type config =
  >   { leading : bool
  >   ; trailing : bool
  >   }
  > type t
  > external foo: config -> t = "foo"
  > EOF

  $ melc -nopervasives -w @69 main.ml -o main.cmj
