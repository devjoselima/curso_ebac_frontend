module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less:{
            development: {
                files: {
                    './styles/main.css': './styles/main.less' 
                }
            },
            productions: {
                options:{
                    compress: true,
                },
                files: {
                    './styles/main.min.css': './styles/main.less'
                }
            }
        },
        uglify:{
            target:{
                files:{
                    './scripts/main.min.js': './scripts/main.js'
                }
            }
        }
    })


    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    
    grunt.registerTask('default', ['less', 'uglify']);
}