'use strict';

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-jscs');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-karma');

  grunt.initConfig({
    jshint: {
      all: ['lib/*.js', 'app/js/**/*.js', 'Gruntfile.js', 'test/api/*.js', 'server.js'],
      options: {
        jshintrc: true
      }
    },

    jscs: {
      src: ['lib/**/*.js', 'app/js/**/*.js', 'Gruntfile.js', 'test/api/*.js', 'server.js'],
      options: {
        config: '.jscsrc'
      }
    },

    simplemocha: {
      src: ['test/api/*.js']
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
      },

      test: {
        src: ['test/client/**/*.js'],
        dest: 'test/angular_testbundle.js',
        options: {
          transform: ['debowerify']
        }
      }
    },

    karma: {
      unit: {
        configFile: 'karma.conf.js'
      },
      continuous: {
        configFile: 'karma.config.js',
        singleRun: false,
        browsers: ['PhantomJS', 'Chrome', 'Safari', 'Firefox']
      }
    }
  });
  grunt.registerTask('test:client', ['browserify:test', 'karma:unit']);
  grunt.registerTask('test', ['jshint', 'jscs', 'simplemocha', 'test:client']);
  grunt.registerTask('default', ['test']);
  grunt.registerTask('build', ['jshint', 'jscs', 'clean', 'browserify:dev', 'copy:dev']);
};
