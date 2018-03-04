'use strict';

const replace = require("replace");

console.log('\nreplace all [/index] paths ...\n');

const corruptModules = [
  'flex-layout',
  'angular-calendar'
];

corruptModules.forEach(module => {
  let regex = `${module}/index`
  replace({
    regex: regex,
    replacement: `${module}`,
    paths: ['dist'],
    recursive: true,
    silent: false,
    include: "*.js,*.js.map"
  });
});
