{
  description = "Flake for dev shell each default system";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-23.05";
    flake-utils.url = "github:numtide/flake-utils";
  };
  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let pkgs = nixpkgs.legacyPackages.${system}; in rec {
        devShell = pkgs.mkShell {
          buildInputs = with pkgs; [
            nodejs_latest
            nodePackages_latest.pnpm
          ];
        };
      }
    );
}
