define(['vendor/bogus/bogus'], function(bogus){

    'use strict';

    var assert = buster.assert,
        refute = buster.refute;

    describe('b2', function(){
        var b2;

        beforeAll(function(done){
            bogus.requireWithStubs('src/b2', function succes(moduleLoaded){
                b2 = moduleLoaded;
                done();
            });
        });

        afterAll(function(done){
            bogus.reset(done);
        });

        it('should be a constructor', function(){
            assert.isFunction(b2);
        });

        it('should be defined', function(){
            assert.defined(b2);
        });

        it('must not be a Boolean', function(){
            refute.isBoolean(b2);
        });
    });
});
