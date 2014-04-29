define(['src/d8'], function(d8){

    'use strict';

    var assert = buster.assert;

    describe('d8', function(){
        it('should be a constructor', function(){
            assert.isFunction(d8);
        });
    });
});
