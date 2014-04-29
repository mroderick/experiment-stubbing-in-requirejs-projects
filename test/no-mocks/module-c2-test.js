define(['src/c2'], function(c2){

    'use strict';

    var assert = buster.assert;

    describe('c2', function(){
        it('should be a constructor', function(){
            assert.isFunction(c2);
        });
    });
});
