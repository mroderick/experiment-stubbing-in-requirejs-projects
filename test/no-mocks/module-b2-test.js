define(['src/b2'], function(b2){

    'use strict';

    var assert = buster.assert,
        refute = buster.refute;

    describe('b2', function(){
        it('should be a constructor', function(){
            assert.isFunction(b2);
        });

        it('should be defined', function(){
            assert.defined(b2);
        });

        it('must not be a Boolean', function(){
            refute.isBoolean(b2);
        });
    });
});
