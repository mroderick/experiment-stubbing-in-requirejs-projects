define(['vendor/bogus/bogus'], function(bogus){

    'use strict';

    var assert = buster.assert,
        refute = buster.refute;

    describe('d8', function(){
        var d8;

        beforeAll(function(done){
            bogus.requireWithStubs('src/d8', function succes(moduleLoaded){
                d8 = moduleLoaded;
                done();
            });
        });

        afterAll(function(done){
            bogus.reset(done);
        });

        it('should be a constructor', function(){
            assert.isFunction(d8);
        });

        it('should be defined', function(){
            assert.defined(d8);
        });

        it('must not be a Boolean', function(){
            refute.isBoolean(d8);
        });
    });
});
