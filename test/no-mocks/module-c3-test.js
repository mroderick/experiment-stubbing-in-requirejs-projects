define(['src/c3'], function(c3){

    'use strict';

    var assert = buster.assert,
        refute = buster.refute;

    describe('c3', function(){
        it('should be a constructor', function(){
            assert.isFunction(c3);
        });

        it('should be defined', function(){
            assert.defined(c3);
        });

        it('must not be a Boolean', function(){
            refute.isBoolean(c3);
        });
    });
});
