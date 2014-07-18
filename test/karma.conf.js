// Karma configuration
// http://karma-runner.github.io/0.12/config/configuration-file.html
// Generated on 2014-07-15 using
// generator-karma 0.8.3

module.exports = function(config) {
  'use strict';

  config.set({
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // base path, that will be used to resolve files and exclude
    basePath: '../',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['requirejs', 'mocha', 'chai', 'sinon'],

    // list of files / patterns to load in the browser
	files: [
		'test/mocha.conf.js',
		{pattern: 'vendor/**/*.js', included: false},
		{pattern: 'src/**/*.js', included: false},
		{pattern: 'test/**/*.test.js', included: false},
		'test/test-main.js'
  ],

    // list of files / patterns to exclude
    exclude: [
	    'build/**/*.js',
	    'vendor/require.js',
        'src/ventus.js',
        'src/wrap.end',
        'src/wrap.start'
    ],

    // web server port
    port: 8080,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: [
      'Chrome'
    ],

    // Which plugins to enable
    plugins: [
	    'karma-requirejs',
		'karma-mocha',
		'karma-chai',
		'karma-sinon',
		'karma-chrome-launcher'
    ],

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: true,

    colors: true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO

    // Uncomment the following lines if you are using grunt's server to run the tests
    // proxies: {
    //   '/': 'http://localhost:9000/'
    // },
    // URL root prevent conflicts with the site root
    // urlRoot: '_karma_'
  });
};
