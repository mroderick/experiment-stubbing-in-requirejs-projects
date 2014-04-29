define(['src/d5'], function(d5){

    'use strict';

    var assert = buster.assert;

    describe('d5', function(){
        it('should be a constructor', function(){
            assert.isFunction(d5);
        });
    });
});
