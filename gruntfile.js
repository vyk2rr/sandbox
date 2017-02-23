module.exports = function(grunt) {
  grunt.initConfig ({

    sass: {
      dist: {
        files: {
          'public/stylesheets/style.css' : 'sass/application.scss'
        }
      }
    },

    watch: {
      css: {
        files: ['sass-app/**/*.scss'],
        tasks: ['sass'],
        options: {
          livereload: true, // needed to run LiveReload
        }
      },
      react: {
        files: ['react-app/**/*.js'],
        tasks: [],
        options: {
          livereload: true, // needed to run LiveReload
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['sass']);
};

