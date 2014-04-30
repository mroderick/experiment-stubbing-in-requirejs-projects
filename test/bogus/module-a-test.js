define(['vendor/bogus/bogus'], function(bogus){

    'use strict';

    var assert = buster.assert,
        refute = buster.refute;

    describe('a', function(){
        var a;

        beforeAll(function(done){
            bogus.requireWithStubs('src/a', function succes(moduleLoaded){
                a = moduleLoaded;
                done();
            });
        });

        afterAll(function(done){
            bogus.reset(done);
        });

        it('should be a constructor', function(){
            assert.isFunction(a);
        });

        it('should be defined', function(){
            assert.defined(a);
        });

        it('must not be a Boolean', function(){
            refute.isBoolean(a);
        });
    });
});
