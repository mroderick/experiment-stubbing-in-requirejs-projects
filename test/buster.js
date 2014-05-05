(function(){
    'use strict';

    var config = module.exports;

    config['basic setup'] = {
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
        testHelpers: ['test/helper.js'],

        extensions : [
            require('buster-amd')
        ]
    }

    config['No stubs'] = {
        extends : 'basic setup',
        tests: [
            'test/no-mocks/*-test.js'
        ]
    };

    config['Squire stubs'] = {
        rootPath: '../',
        environment: 'browser', // or 'node'

        libs : [
            'vendor/requirejs/require.js'
        ],

        // make sure library files are made available by the test server
        // otherwise the require statements that fetch them will fail,
        resources : [
            'vendor/squire/src/Squire.js'
        ],

        sources: [
            'src/*.js'
        ],
        tests: [
            'test/squire/*-test.js'
        ],
        testHelpers: ['test/helper.js'],

        extensions : [
            require('buster-amd')
        ]
    };

    config['bogus stubs'] = {
        rootPath: '../',
        environment: 'browser', // or 'node'

        libs : [
            'vendor/requirejs/require.js'
        ],

        // make sure library files are made available by the test server
        // otherwise the require statements that fetch them will fail,
        resources : [
            'vendor/bogus/bogus.js'
        ],

        sources: [
            'src/*.js'
        ],
        tests: [
            'test/bogus/*-test.js'
        ],
        testHelpers: ['test/helper.js'],

        extensions : [
            require('buster-amd')
        ]
    };
}());
