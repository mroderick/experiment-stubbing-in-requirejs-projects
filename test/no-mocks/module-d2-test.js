define(['src/d2'], function(d2){

    'use strict';

    var assert = buster.assert;

    describe('d2', function(){
        it('should be a constructor', function(){
            assert.isFunction(d2);
        });
    });
});
