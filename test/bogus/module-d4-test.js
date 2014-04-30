define(['vendor/bogus/bogus'], function(bogus){

    'use strict';

    var assert = buster.assert,
        refute = buster.refute;

    describe('d4', function(){
        var d4;

        beforeAll(function(done){
            bogus.requireWithStubs('src/d4', function succes(moduleLoaded){
                d4 = moduleLoaded;
                done();
            });
        });

        afterAll(function(done){
            bogus.reset(done);
        });

        it('should be a constructor', function(){
            assert.isFunction(d4);
        });

        it('should be defined', function(){
            assert.defined(d4);
        });

        it('must not be a Boolean', function(){
            refute.isBoolean(d4);
        });
    });
});
