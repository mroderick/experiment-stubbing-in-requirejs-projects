define(['vendor/bogus/bogus'], function(bogus){

    'use strict';

    var assert = buster.assert,
        refute = buster.refute;

    describe('d3', function(){
        var d3;

        beforeAll(function(done){
            bogus.requireWithStubs('src/d3', function succes(moduleLoaded){
                d3 = moduleLoaded;
                done();
            });
        });

        afterAll(function(done){
            bogus.reset(done);
        });

        it('should be a constructor', function(){
            assert.isFunction(d3);
        });

        it('should be defined', function(){
            assert.defined(d3);
        });

        it('must not be a Boolean', function(){
            refute.isBoolean(d3);
        });
    });
});
