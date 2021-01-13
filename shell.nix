let pkgs = import <nixpkgs> { };

in with pkgs;
mkShell {
  name = "node-env";
  buildInputs = [ nodejs-14_x jq chromium chromedriver openssl unzip zip ];
  postShellHook = ''
    unset SOURCE_DATE_EPOCH
  '';
  shellHook = ''
    export PATH="$PWD/node_modules/.bin/:$PATH"
    echo "export PATH=$PATH" > .envrc
    ~/.emacs.d/bin/doom env
    direnv allow
  '';
}

