define(['vendor/bogus/bogus'], function(bogus){

    'use strict';

    var assert = buster.assert,
        refute = buster.refute;

    describe('d5', function(){
        var d5;

        beforeAll(function(done){
            bogus.requireWithStubs('src/d5', function succes(moduleLoaded){
                d5 = moduleLoaded;
                done();
            });
        });

        afterAll(function(done){
            bogus.reset(done);
        });

        it('should be a constructor', function(){
            assert.isFunction(d5);
        });

        it('should be defined', function(){
            assert.defined(d5);
        });

        it('must not be a Boolean', function(){
            refute.isBoolean(d5);
        });
    });
});
