'use strict';

module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-execute');
  grunt.loadNpmTasks('grunt-jasmine-node');

  grunt.initConfig({

    execute: {
      all: {
        src: ['server.js']
      }
    },
    jasmine_node: {
      options: {
        matchall: true
      },
      all: ['test/spec/']
    }

  });

  grunt.registerTask('serve', function (target) {
    grunt.task.run(['execute']);
  });

  grunt.registerTask('test', function (target) {
    grunt.task.run(['jasmine_node']);
  });

};
