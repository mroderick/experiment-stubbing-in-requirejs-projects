define(['src/b1'], function(b1){

    'use strict';

    var assert = buster.assert;

    describe('b1', function(){
        it('should be a constructor', function(){
            assert.isFunction(b1);
        });
    });
});
