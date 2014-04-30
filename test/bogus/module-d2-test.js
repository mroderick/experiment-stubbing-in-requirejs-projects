define(['vendor/bogus/bogus'], function(bogus){

    'use strict';

    var assert = buster.assert,
        refute = buster.refute;

    describe('d2', function(){
        var d2;

        beforeAll(function(done){
            bogus.requireWithStubs('src/d2', function succes(moduleLoaded){
                d2 = moduleLoaded;
                done();
            });
        });

        afterAll(function(done){
            bogus.reset(done);
        });

        it('should be a constructor', function(){
            assert.isFunction(d2);
        });

        it('should be defined', function(){
            assert.defined(d2);
        });

        it('must not be a Boolean', function(){
            refute.isBoolean(d2);
        });
    });
});
