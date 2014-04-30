define(['vendor/bogus/bogus'], function(bogus){

    'use strict';

    var assert = buster.assert,
        refute = buster.refute;

    describe('d6', function(){
        var d6;

        beforeAll(function(done){
            bogus.requireWithStubs('src/d6', function succes(moduleLoaded){
                d6 = moduleLoaded;
                done();
            });
        });

        afterAll(function(done){
            bogus.reset(done);
        });

        it('should be a constructor', function(){
            assert.isFunction(d6);
        });

        it('should be defined', function(){
            assert.defined(d6);
        });

        it('must not be a Boolean', function(){
            refute.isBoolean(d6);
        });
    });
});
