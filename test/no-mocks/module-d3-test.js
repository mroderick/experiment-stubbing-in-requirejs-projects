define(['src/d3'], function(d3){

    'use strict';

    var assert = buster.assert,
        refute = buster.refute;

    describe('d3', function(){
        it('should be a constructor', function(){
            assert.isFunction(d3);
        });

        it('should be defined', function(){
            assert.defined(d3);
        });

        it('must not be a Boolean', function(){
            refute.isBoolean(d3);
        });
    });
});
