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
      outputFile: 'tests_reporters/results-chromium.html',
      pageTitle: 'Test Results',
      groupSuites: true,
      useCompactStyle: true,
      useLegacyStyle: true
    },

    coverageReporter: {
      dir : 'tests_reporters/coverage/',
      reporters: [
        { type: 'html', file : 'coverage-chromium.html'},
        { type: 'text-summary' },
        { type: 'text', file : 'coverage-chromium.txt' }
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
    browsers: ['ChromeNoSandbox'],
    customLaunchers: {
      ChromeNoSandbox: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },
    singleRun: true
  };

  config.set(_config);
};
