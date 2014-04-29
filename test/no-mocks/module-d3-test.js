define(['src/d3'], function(d3){

    'use strict';

    var assert = buster.assert;

    describe('d3', function(){
        it('should be a constructor', function(){
            assert.isFunction(d3);
        });
    });
});
