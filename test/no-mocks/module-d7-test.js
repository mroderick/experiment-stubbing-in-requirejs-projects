define(['src/d7'], function(d7){

    'use strict';

    var assert = buster.assert,
        refute = buster.refute;

    describe('d7', function(){
        it('should be a constructor', function(){
            assert.isFunction(d7);
        });

        it('should be defined', function(){
            assert.defined(d7);
        });

        it('must not be a Boolean', function(){
            refute.isBoolean(d7);
        });
    });
});
