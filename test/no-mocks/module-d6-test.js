define(['src/d6'], function(d6){

    'use strict';

    var assert = buster.assert,
        refute = buster.refute;

    describe('d6', function(){
        it('should be a constructor', function(){
            assert.isFunction(d6);
        });

        it('should be defined', function(){
            assert.defined(d6);
        });

        it('must not be a Boolean', function(){
            refute.isBoolean(d6);
        });
    });
});
