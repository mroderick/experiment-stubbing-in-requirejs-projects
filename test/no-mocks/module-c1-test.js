define(['src/c1'], function(c1){

    'use strict';

    var assert = buster.assert;

    describe('c1', function(){
        it('should be a constructor', function(){
            assert.isFunction(c1);
        });
    });
});
