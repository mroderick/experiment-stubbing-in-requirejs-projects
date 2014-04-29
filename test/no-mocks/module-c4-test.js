define(['src/c4'], function(c4){

    'use strict';

    var assert = buster.assert;

    describe('c4', function(){
        it('should be a constructor', function(){
            assert.isFunction(c4);
        });
    });
});
