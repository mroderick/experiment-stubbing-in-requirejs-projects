define(['src/d5'], function(d5){

    'use strict';

    var assert = buster.assert,
        refute = buster.refute;

    describe('d5', function(){
        it('should be a constructor', function(){
            assert.isFunction(d5);
        });

        it('should be defined', function(){
            assert.defined(d5);
        });

        it('must not be a Boolean', function(){
            refute.isBoolean(d5);
        });
    });
});
