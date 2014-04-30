define(['vendor/bogus/bogus'], function(bogus){

    'use strict';

    var assert = buster.assert,
        refute = buster.refute;

    describe('b1', function(){
        var b1;

        beforeAll(function(done){
            bogus.requireWithStubs('src/b1', function succes(moduleLoaded){
                b1 = moduleLoaded;
                done();
            });
        });

        afterAll(function(done){
            bogus.reset(done);
        });

        it('should be a constructor', function(){
            assert.isFunction(b1);
        });

        it('should be defined', function(){
            assert.defined(b1);
        });

        it('must not be a Boolean', function(){
            refute.isBoolean(b1);
        });
    });
});
