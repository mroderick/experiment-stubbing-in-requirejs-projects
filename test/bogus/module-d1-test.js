define(['vendor/bogus/bogus'], function(bogus){

    'use strict';

    var assert = buster.assert,
        refute = buster.refute;

    describe('d1', function(){
        var d1;

        beforeAll(function(done){
            bogus.requireWithStubs('src/d1', function succes(moduleLoaded){
                d1 = moduleLoaded;
                done();
            });
        });

        afterAll(function(done){
            bogus.reset(done);
        });

        it('should be a constructor', function(){
            assert.isFunction(d1);
        });

        it('should be defined', function(){
            assert.defined(d1);
        });

        it('must not be a Boolean', function(){
            refute.isBoolean(d1);
        });
    });
});
