define(['src/d1'], function(d1){

    'use strict';

    var assert = buster.assert,
        refute = buster.refute;

    describe('d1', function(){
        it('should be a constructor', function(){
            assert.isFunction(d1);
        });

        it('should be defined', function(){
            assert.defined(d1);
        });

        it('must not be a Boolean', function(){
            refute.isBoolean(d1);
        });
    });
});
