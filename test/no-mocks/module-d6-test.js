define(['src/d6'], function(d6){

    'use strict';

    var assert = buster.assert;

    describe('d6', function(){
        it('should be a constructor', function(){
            assert.isFunction(d6);
        });
    });
});
