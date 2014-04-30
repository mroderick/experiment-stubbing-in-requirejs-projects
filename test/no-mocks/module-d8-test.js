define(['src/d8'], function(d8){

    'use strict';

    var assert = buster.assert,
        refute = buster.refute;

    describe('d8', function(){
        it('should be a constructor', function(){
            assert.isFunction(d8);
        });

        it('should be defined', function(){
            assert.defined(d8);
        });

        it('must not be a Boolean', function(){
            refute.isBoolean(d8);
        });
    });
});
