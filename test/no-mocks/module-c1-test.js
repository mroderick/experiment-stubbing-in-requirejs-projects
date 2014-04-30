define(['src/c1'], function(c1){

    'use strict';

    var assert = buster.assert,
        refute = buster.refute;

    describe('c1', function(){
        it('should be a constructor', function(){
            assert.isFunction(c1);
        });

        it('should be defined', function(){
            assert.defined(c1);
        });

        it('must not be a Boolean', function(){
            refute.isBoolean(c1);
        });
    });
});
