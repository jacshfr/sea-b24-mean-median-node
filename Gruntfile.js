'use strict';

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-jscs');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-browserify');

  grunt.initConfig({
    jshint: {
      all: ['lib/*.js', 'app/js/**/*.js', 'Gruntfile.js'],
      options: {
        jshintrc: true
      }
    },

    jscs: {
      src: ['lib/**/*.js', 'app/js/**/*.js', 'Gruntfile.js'],
      options: {
        config: '.jscsrc'
      }
    },

    simplemocha: {
      src: ['test/**/*.js']
    },

    clean: {
      src: ['build/']
    },

    copy: {
      dev: {
        cwd: 'app/',
        expand: true,
        src: ['**/*.html'],
        dest: 'build/'
      }
    },

    browserify: {
      dev: {
        src: ['app/js/**/*.js'],
        dest: 'build/client_bundle.js',
        options: {
          transform: ['debowerify']
        }
      }
    }
  });
  grunt.registerTask('test', ['jshint', 'jscs', 'simplemocha']);
  grunt.registerTask('default', ['test']);
  grunt.registerTask('build', ['jshint', 'jscs', 'clean', 'browserify', 'copy:dev']);
};
