module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    shell: {
      jekyll: {
        command: 'jekyll build',
        options: {
          async: false
        }
      }
    },
    less: {
        dev: {
            options: {
                yuicompress: true
            },
            files: {
                'assets.css' : ['less/**/*.less']
            }
        }
    },
    watch: {
      jekyll: {
        files: ['*.yml', '*.html', '*.css', '_posts/**/*.md', '_layouts/*.html', '_includes/*.html'],
        tasks: ['shell:jekyll']
      },
      less: {
          files: ['less/**/*.less'],
          tasks: ['less']
      }
    }
  });

  // Default task. Run standard jekyll server and update changes
  grunt.loadNpmTasks('grunt-shell-spawn');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');

  // plugin tasks
  grunt.registerTask('default', ['shell']);
  grunt.registerTask('theme', ['watch']);
 
};