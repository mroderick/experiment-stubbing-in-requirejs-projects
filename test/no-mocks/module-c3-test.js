define(['src/c3'], function(c3){

    'use strict';

    var assert = buster.assert;

    describe('c3', function(){
        it('should be a constructor', function(){
            assert.isFunction(c3);
        });
    });
});
