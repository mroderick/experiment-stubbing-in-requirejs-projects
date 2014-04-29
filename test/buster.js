(function(){
    'use strict';

    var config = module.exports;

    config['No mocks'] = {
        rootPath: '../',
        environment: 'browser', // or 'node'

        libs : [
            'vendor/requirejs/require.js'
        ],

        // make sure library files are made available by the test server
        // otherwise the require statements that fetch them will fail,
        resources : [],

        sources: [
            'src/*.js'
        ],
        tests: [
            'test/no-mocks/*-test.js'
        ],
        testHelpers: ['test/helper.js'],

        extensions : [
            require('buster-amd')
        ]
    };
}());
