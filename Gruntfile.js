module.exports = function (grunt) {
	'use strict';
	// Load grunt tasks automatically
	require('load-grunt-tasks')(grunt);

	// Time how long tasks take. Can help when optimizing build times
	require('time-grunt')(grunt);

	// Configurable paths for the application
	var appConfig = {
		app: 'src',
		dist: 'build'
	};

	// Project configuration
	grunt.initConfig({

		handlebars: {
			compile: {
				options: {
					namespace: 'Handlebars.templates',
					amd: true
				},
				files: {
					'src/ventus/tpl/window.tpl.js': 'src/ventus/tpl/window.tpl'
				}
			}
		},

		requirejs: {
			options: {
				baseUrl: 'vendor',

				paths: {
					'ventus': '../src/ventus',

					'tpl': '../src/plugins/tpl',
					'less': '../src/plugins/less',
					'text': '../src/plugins/text',

					'$': 'jquery',
					'Underscore': '../vendor/underscore'
				},

				shim: {
					'Underscore': {
						exports: '_'
					}
				},

				optimizeAllPluginResources: true,

				include: ['almond', 'ventus'],
				exclude: ['$', 'handlebars'],

				optimize: 'none',

				wrap: {
					startFile: "src/wrap.start",
					endFile: "src/wrap.end"
				},
				out: "build/ventus.js"
			},
			compile: {
				options: {
					out: "build/ventus.js"
				}
			},
			compilemin: {
				options: {
					out: "build/ventus.min.js",
					optimize: 'uglify'
				}
			}
		},

		// Test settings
		karma: {
			unit: {
				configFile: 'test/karma.conf.js',
				singleRun: true
			}
		}
	});

	grunt.registerTask('test', [
		'karma'
	]);

	grunt.registerTask('buildDebug', [
		'handlebars:compile',
		'requirejs:compile'
	]);

	grunt.registerTask('buildMin', [
		'handlebars:compile',
		'requirejs:compilemin'
	]);

	grunt.registerTask('build', 'Generating build', function (target) {
		if (!target) {
			grunt.task.run(['handlebars:compile', 'requirejs:compile', 'requirejs:compilemin']);
		} else if (target === "min") {
			grunt.task.run('buildMin');
		} else if (target === "debug") {
			grunt.task.run('buildDebug');
		}
	});


};

