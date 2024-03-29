/**
 * grunt-sakugawa
 * https://github.com/paazmaya/grunt-sakugawa
 *
 * Copyright (c) Juga Paazmaya <paazmaya@yahoo.com> (https://paazmaya.fi)
 * Licensed under the MIT license.
 */


const tape = require('tape'),
  grunt = require('grunt');


tape('media query separation', (test) => {
  test.plan(2);

  const expected1 = grunt.file.read('tests/expected/pure-min_1.css');
  const expected2 = grunt.file.read('tests/expected/pure-min_2.css');
  const actual1 = grunt.file.read('tmp/pure-min_1.css');
  const actual2 = grunt.file.read('tmp/pure-min_2.css');

  test.equal(expected1, actual1);
  test.equal(expected2, actual2);
});


tape('suffix usage', (test) => {
  test.plan(1);

  test.ok(grunt.file.exists('tmp/suffixdash-split-1.css'));
});
