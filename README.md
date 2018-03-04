# bd-base-lib


## Usage
This repository should provide an easy and fast way to scaffold bindoc angular libs.

### Init
Clone the repo and rename the folder.
Afterwards run `init.sh` with scope (e.g. bindoc, emergency, ...) and lib name as parameter.
The script will insert the scope and lib name in all needed files.

#### Example
```sh
# init @bindoc/user
./init.sh bindoc users

# run demo app inside
npm start

# start karma tests
npm run test

# build the lib to dist folder
npm run build
```

### Publish

> Known corrupt modules fixed by the hotfix-script: 
> - `@angular/flex-layout`
> - `angular-calendar`.

To publish the module just run `publish.sh` inside build folder.
- builds the lib
- applies hotfix for wrong '/index' suffixes in imports by running replace script
- tags current commit with version from package.json
- push (including tags)
- runs `npm publish` in dist

## Based on Angular QuickStart Lib

This is a simple library quickstart for Angular libraries, implementing the
[Angular Package Format v4.0](https://docs.google.com/document/d/1CZC2rcpxffTDfRDs6p1cfbmKNLA6x5O-NtkJglDaBVs/edit#heading=h.k0mh3o8u5hx).

Currently only unscoped, primary entry-point libraries are supported.

Features:
- a simple example library
- unit tests for the library
- a demo application that consumes the library in JIT mode and runs in watch mode
- an integration app that consumes the library in JIT and AOT mode and runs e2e tests

Common tasks are present as npm scripts:

- `npm start` to run a live-reload server with the demo app
- `npm run test` to test in watch mode, or `npm run test:once` to only run once
- `npm run build` to build the library
- `npm run lint` to lint 
- `npm run clean` to clean
- `npm run integration` to run the integration e2e tests
- `npm install ./relative/path/to/lib` after `npm run build` to test locally in another app

If you need to debug the integration app, please check `./integration/README.md`.
