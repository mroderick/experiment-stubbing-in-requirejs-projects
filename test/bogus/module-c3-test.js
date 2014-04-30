define(['vendor/bogus/bogus'], function(bogus){

    'use strict';

    var assert = buster.assert,
        refute = buster.refute;

    describe('c3', function(){
        var c3;

        beforeAll(function(done){
            bogus.requireWithStubs('src/c3', function succes(moduleLoaded){
                c3 = moduleLoaded;
                done();
            });
        });

        afterAll(function(done){
            bogus.reset(done);
        });

        it('should be a constructor', function(){
            assert.isFunction(c3);
        });

        it('should be defined', function(){
            assert.defined(c3);
        });

        it('must not be a Boolean', function(){
            refute.isBoolean(c3);
        });
    });
});
