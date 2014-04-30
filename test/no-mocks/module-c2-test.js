define(['src/c2'], function(c2){

    'use strict';

    var assert = buster.assert,
        refute = buster.refute;

    describe('c2', function(){
        it('should be a constructor', function(){
            assert.isFunction(c2);
        });

        it('should be defined', function(){
            assert.defined(c2);
        });

        it('must not be a Boolean', function(){
            refute.isBoolean(c2);
        });
    });
});
