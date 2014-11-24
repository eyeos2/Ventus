module.exports = function (grunt) {
	'use strict';
	// Load grunt tasks automatically
	require('load-grunt-tasks')(grunt);

	// Time how long tasks take. Can help when optimizing build times
	require('time-grunt')(grunt);

	// Project configuration
	grunt.initConfig({

		// Project settings
		dirs: {
			app: 'src',
			dist: 'build'
		},

		// Watches files for changes and runs tasks based on the changed files
		watch: {
			css: {
				files: ['<%= dirs.app %>/ventus/css/*.less'],
				tasks: ['less'],
				options: {
					// Start a live reload server on the default port 35729
					livereload: 35730
				}
			}
		},

		handlebars: {
			compile: {
				options: {
					namespace: 'Handlebars.templates',
					amd: true
				},
				files: {
					'src/ventus/tpl/window.tpl.js': '<%= dirs.app %>/ventus/tpl/window.tpl',
					'src/ventus/tpl/windowContentMessage.tpl.js': '<%= dirs.app %>/ventus/tpl/windowContentMessage.tpl'
				}
			}
		},

		less: {
			default: {
				options: {
					paths: ["<%= dirs.app %>/ventus/css"]
				},
				files: {
					"build/ventus.css": ['<%= dirs.app %>/ventus/css/*.less']
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
					out: "<%= dirs.dist %>/ventus.js"
				}
			},
			release: {
				options: {
					out: "<%= dirs.dist %>/ventus.min.js",
					optimize: 'uglify'
				}
			}
		},

		clean: {
			release: {
				src: [
					'build/*',
					'<%= dirs.app %>/ventus/tpl/*.tpl.js'
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
		grunt.task.run(['clean', 'handlebars:compile', 'less']);

		if (!target) {
			grunt.task.run(['requirejs:release', 'requirejs:debug']);
		} else {
			grunt.task.run('requirejs:'+target); //release or debug
		}
	});


};

