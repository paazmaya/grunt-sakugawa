/**
 * grunt-sakugawa
 * https://github.com/paazmaya/grunt-sakugawa
 *
 * Copyright (c) Juga Paazmaya
 * Licensed under the MIT license.
 */

'use strict';

var sakugawa = require('sakugawa');

module.exports = function (grunt) {

  grunt.registerMultiTask('sakugawa', 'CSS splitter, filter and organiser', function () {

    var options = this.options({
      maxSelectors: 4090,
      mediaQueries: 'normal',
      suffix: '_'
    });

    this.files.forEach(function (file) {
      var src = file.src.filter(function (filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        }
        else {
          return true;
        }
      });

      src.forEach(function (srcPath) {
        var pages = sakugawa(grunt.file.read(srcPath), options);
        pages.forEach(function (css, index) {
          grunt.file.write(srcPath.replace(/\.css/, options.suffix + (index + 1) + '.css'), css);
        });
      });

    });
  });

};
