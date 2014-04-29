define(['src/a'], function(a){

    'use strict';

    var assert = buster.assert;

    describe('a', function(){
        it('should be a constructor', function(){
            assert.isFunction(a);
        });
    });
});
