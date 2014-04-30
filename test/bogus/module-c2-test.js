define(['vendor/bogus/bogus'], function(bogus){

    'use strict';

    var assert = buster.assert,
        refute = buster.refute;

    describe('c2', function(){
        var c2;

        beforeAll(function(done){
            bogus.requireWithStubs('src/c2', function succes(moduleLoaded){
                c2 = moduleLoaded;
                done();
            });
        });

        afterAll(function(done){
            bogus.reset(done);
        });

        it('should be a constructor', function(){
            assert.isFunction(c2);
        });

        it('should be defined', function(){
            assert.defined(c2);
        });

        it('must not be a Boolean', function(){
            refute.isBoolean(c2);
        });
    });
});
