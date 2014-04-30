define(['src/a'], function(a){

    'use strict';

    var assert = buster.assert,
        refute = buster.refute;

    describe('a', function(){
        it('should be a constructor', function(){
            assert.isFunction(a);
        });

        it('should be defined', function(){
            assert.defined(a);
        });

        it('must not be a Boolean', function(){
            refute.isBoolean(a);
        });
    });
});
