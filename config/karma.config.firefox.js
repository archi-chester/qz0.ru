var webpackConfig = require('./webpack.test');

module.exports = function (config) {
  var _config = {
    basePath: '',

    frameworks: ['jasmine'],

    files: [
      {pattern: './config/karma-test-shim.js', watched: false}
    ],

    preprocessors: {
      './config/karma-test-shim.js': ['coverage', 'webpack', 'sourcemap']
    },


    webpack: webpackConfig,

    webpackMiddleware: {
      stats: 'errors-only'
    },

    webpackServer: {
      noInfo: true
    },

    reporters: ['progress', 'coverage', 'html'],

    htmlReporter: {
      outputFile: 'tests_reporters/results-firefox.html',
      pageTitle: 'Test Results',
      groupSuites: true,
      useCompactStyle: true,
      useLegacyStyle: true
    },

    coverageReporter: {
      dir : 'tests_reporters/coverage/',
      reporters: [
        { type: 'html', file : 'coverage-firefox.html'},
        { type: 'text-summary' },
        { type: 'text', file : 'coverage-firefox.txt' }
      ]
    },

    browserConsoleLogOptions: {
        terminal: true,
        level: ""
    },

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['Firefox'],
    singleRun: true
  };

  config.set(_config);
};
