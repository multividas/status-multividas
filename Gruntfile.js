module.exports = function (grunt) {
  // configuration
  grunt.initConfig({
    // pass in options tu plugins, references to files etc
    concat: {
      css: {
        src: ['assets/css/*.css'],
        dest: 'build/style.min.css'
      }
    },
    cssmin: {
      target: {
        files: {
          'build/style.min.css': ['build/style.min.css']
        }
      }
    }
  })

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-concat')
  grunt.loadNpmTasks('grunt-contrib-cssmin')

  // register tasks
  grunt.registerTask('concat-css', ['concat:css']);
};
