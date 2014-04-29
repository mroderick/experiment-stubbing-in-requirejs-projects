define(['src/d1'], function(d1){

    'use strict';

    var assert = buster.assert;

    describe('d1', function(){
        it('should be a constructor', function(){
            assert.isFunction(d1);
        });
    });
});
