'use strict';

module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-execute');
  grunt.loadNpmTasks('grunt-jasmine-node');

  grunt.initConfig({

    execute: {
      all: {
        src: ['01-app-structure/server.js']
      }
    },
    jasmine_node: {
      options: {
        matchall: true
      },
      all: ['02-unit-testing/test/spec/']
    }

  });

  grunt.registerTask('serve', function (target) {
    grunt.task.run(['execute']);
  });

  grunt.registerTask('test', function (target) {
    grunt.task.run(['jasmine_node']);
  });

};
