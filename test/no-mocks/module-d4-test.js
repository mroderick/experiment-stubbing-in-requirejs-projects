define(['src/d4'], function(d4){

    'use strict';

    var assert = buster.assert;

    describe('d4', function(){
        it('should be a constructor', function(){
            assert.isFunction(d4);
        });
    });
});
