define(['src/d2'], function(d2){

    'use strict';

    var assert = buster.assert,
        refute = buster.refute;

    describe('d2', function(){
        it('should be a constructor', function(){
            assert.isFunction(d2);
        });

        it('should be defined', function(){
            assert.defined(d2);
        });

        it('must not be a Boolean', function(){
            refute.isBoolean(d2);
        });
    });
});
