module.exports = function (config) {
    config.set({

        basePath: '../',

        files: [
            {
                pattern: 'node_modules/chai/chai.js',
                include: true
            },
            'app/vendor/jquery-2.1.1.min.js',
            'app/vendor/lodash.min.js',
            'app/lib/*.js',
            'test/unit/**/*.js'
        ],

        autoWatch: true,

        frameworks: ['mocha'],

        browsers: ['Chrome'],

        reporters: ['dots'],
        //reporters: ['dots', 'junit', 'coverage'],

        plugins: [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-mocha',
            'karma-junit-reporter',
            'karma-coverage'
            ],

        preprocessors: {
            'app/lib/*.js': 'coverage'
        },

        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        },

        coverageReporter: {
            // cf. http://gotwarlost.github.com/istanbul/public/apidocs/
            type: 'lcov',
            dir: 'coverage/'
        },

    });
};