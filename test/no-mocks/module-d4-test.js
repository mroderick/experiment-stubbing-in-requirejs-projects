define(['src/d4'], function(d4){

    'use strict';

    var assert = buster.assert,
        refute = buster.refute;

    describe('d4', function(){
        it('should be a constructor', function(){
            assert.isFunction(d4);
        });

        it('should be defined', function(){
            assert.defined(d4);
        });

        it('must not be a Boolean', function(){
            refute.isBoolean(d4);
        });
    });
});
