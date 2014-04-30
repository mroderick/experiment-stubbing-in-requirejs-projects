define(['src/c4'], function(c4){

    'use strict';

    var assert = buster.assert,
        refute = buster.refute;

    describe('c4', function(){
        it('should be a constructor', function(){
            assert.isFunction(c4);
        });

        it('should be defined', function(){
            assert.defined(c4);
        });

        it('must not be a Boolean', function(){
            refute.isBoolean(c4);
        });
    });
});
