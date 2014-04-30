define(['vendor/bogus/bogus'], function(bogus){

    'use strict';

    var assert = buster.assert,
        refute = buster.refute;

    describe('d7', function(){
        var d7;

        beforeAll(function(done){
            bogus.requireWithStubs('src/d7', function succes(moduleLoaded){
                d7 = moduleLoaded;
                done();
            });
        });

        afterAll(function(done){
            bogus.reset(done);
        });

        it('should be a constructor', function(){
            assert.isFunction(d7);
        });

        it('should be defined', function(){
            assert.defined(d7);
        });

        it('must not be a Boolean', function(){
            refute.isBoolean(d7);
        });
    });
});
