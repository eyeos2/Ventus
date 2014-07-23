module.exports = function (grunt) {
	'use strict';
	// Load grunt tasks automatically
	require('load-grunt-tasks')(grunt);

	// Time how long tasks take. Can help when optimizing build times
	require('time-grunt')(grunt);

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

		less: {
			default: {
				options: {
					paths: ["src/ventus/css"]
				},
				files: {
					"build/ventus.css": ['src/ventus/css/*.less']
				},
				compress: true,
				cleancss: true
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
				}
			},
			debug: {
				options: {
					out: "build/ventus.js"
				}
			},
			release: {
				options: {
					out: "build/ventus.min.js",
					optimize: 'uglify'
				}
			}
		},

		clean: {
			release: {
				src: [
					'build/*',
					'src/ventus/tpl/*.tpl.js'
				]
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

	grunt.registerTask('build', 'Generating build', function (target) {
		grunt.task.run(['handlebars:compile', 'less']);

		if (!target) {
			grunt.task.run(['requirejs:release', 'requirejs:debug']);
		} else {
			grunt.task.run('requirejs:'+target); //release or debug
		}
	});


};

