(lang dune 3.8)

(using experimental_building_ocaml_compiler_with_dune 0.1)

(using menhir 2.1)

(using melange 0.1)

(executables_implicit_empty_intf true)

(cram enable)

(generate_opam_files true)

(name melange)

(source
 (github melange-re/melange))

(authors "Antonio Nuno Monteiro <anmonteiro@gmail.com>")

(maintainers "Antonio Nuno Monteiro <anmonteiro@gmail.com>")

(homepage "https://github.com/melange-re/melange")

(bug_reports "https://github.com/melange-re/melange/issues")

(license "LGPL-2.1-or-later")

(package
 (name melange)
 (synopsis "Toolchain to produce JS from Reason/OCaml")
 (depends
  (ocaml
   (>= "5.1"))
  (cmdliner
   (>= "1.1.0"))
  dune-build-info
  (cppo :build)
  (ounit :with-test)
  (reason
   (and
    :with-test
    (>= "3.9.0")))
  (ppxlib
   (>= "0.30.0"))
  (menhir
   (>= 20201214))
  (reason-react-ppx
   (and :with-test :post))))

(package
 (name melange-playground)
 (synopsis "The Melange compiler, bundled for the browser")
 (allow_empty)
 (depends
  ocaml
  js_of_ocaml
  (reason
   (>= "3.10.0"))
  (melange
   (= :version))
  reason-react-ppx))
