/**
 * grunt-sakugawa
 * https://github.com/paazmaya/grunt-sakugawa
 *
 * Copyright (c) Juga Paazmaya
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  grunt.initConfig({

    clean: {
      tests: ['tmp']
    },

    sakugawa: {
      pure: {
        options: {
          maxSelectors: 400,
          mediaQueries: 'separate'
        },
        src: ['pure-min.css']
      }
    }

  });

  grunt.loadTasks('tasks');

  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('test', ['clean', 'sakugawa']);
  grunt.registerTask('default', ['test']);

};
