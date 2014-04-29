define(['src/b2'], function(b2){

    'use strict';

    var assert = buster.assert;

    describe('b2', function(){
        it('should be a constructor', function(){
            assert.isFunction(b2);
        });
    });
});
