# mfe-admin-shell

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## Getting Started

When you want to deploy this project for the first time, you will need to set up a GitHub token that has access to the repository. This is required to create a GitHub release and upload the build artifacts.

1. Go to `samconfig.toml`.
2. Uncomment `# parameter_overrides = "GitHubToken=<token-here>"`.
3. Replace `<token-here>` with a GitHub access token that has scope `admin:repo_hook`.
4. Run `bash sam deploy`.
5. Remove the token from the `samconfig.toml` file.
