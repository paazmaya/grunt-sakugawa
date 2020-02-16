/**
 * grunt-sakugawa
 * https://github.com/paazmaya/grunt-sakugawa
 *
 * Copyright (c) Juga Paazmaya <paazmaya@yahoo.com> (https://paazmaya.fi)
 * Licensed under the MIT license.
 */


module.exports = function gruntConf(grunt) {

  grunt.initConfig({

    clean: {
      tests: ['tmp']
    },

    sakugawa: {
      separate: {
        options: {
          maxSelectors: 400,
          mediaQueries: 'separate'
        },
        files: {
          'tmp/': ['tests/fixtures/pure-min.css']
        }
      },
      five: {
        options: {
          maxSelectors: 800,
          minSheets: 5
        },
        files: {
          'tmp/five.css': ['tests/fixtures/pure-min.css']
        }
      },
      suffixdash: {
        options: {
          maxSelectors: 400,
          suffix: '-split-'
        },
        files: {
          'tmp/suffixdash.css': ['tests/fixtures/pure-min.css']
        }
      },
      nonexisting: {
        files: {
          'tmp/': ['tests/fixtures/nonexisting.css']
        }
      }
    }

  });

  grunt.loadTasks('tasks');

  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('test', ['clean', 'sakugawa']);
  grunt.registerTask('default', ['test']);

};
