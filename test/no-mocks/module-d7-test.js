define(['src/d7'], function(d7){

    'use strict';

    var assert = buster.assert;

    describe('d7', function(){
        it('should be a constructor', function(){
            assert.isFunction(d7);
        });
    });
});
