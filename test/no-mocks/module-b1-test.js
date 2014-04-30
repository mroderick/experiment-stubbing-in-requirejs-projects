define(['src/b1'], function(b1){

    'use strict';

    var assert = buster.assert,
        refute = buster.refute;

    describe('b1', function(){
        it('should be a constructor', function(){
            assert.isFunction(b1);
        });

        it('should be defined', function(){
            assert.defined(b1);
        });

        it('must not be a Boolean', function(){
            refute.isBoolean(b1);
        });
    });
});
