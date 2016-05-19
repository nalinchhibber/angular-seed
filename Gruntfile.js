var pkg = require('./package.json');

var dist = "dist/";
var source = "src/";

var srcserver = source + "server/";

var port = process.env.PORT || 8000;

module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        express: { 
            options: {
                port: port,
            },  
            uncompress: {
              options: {
                script: srcserver + 'index.js'
              }
            }
        }

    });

    grunt.loadNpmTasks('grunt-express-server');

    grunt.registerTask('express-keepalive', 'Keep grunt running', function(target) {
        this.async();       
    });
    //Default grunt task
    grunt.registerTask('serve', function (target) {
        process.env.NODE_ENV = 'development';

        process.env.DLS_UNCOMPRESSED_MODE = true;
        grunt.task.run([
            'express:uncompress',
            'express-keepalive'
        ]);
    });

    grunt.registerTask('default', ['serve']);   

};