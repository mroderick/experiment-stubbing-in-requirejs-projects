define(['vendor/bogus/bogus'], function(bogus){

    'use strict';

    var assert = buster.assert,
        refute = buster.refute;

    describe('c1', function(){
        var c1;

        beforeAll(function(done){
            bogus.requireWithStubs('src/c1', function succes(moduleLoaded){
                c1 = moduleLoaded;
                done();
            });
        });

        afterAll(function(done){
            bogus.reset(done);
        });

        it('should be a constructor', function(){
            assert.isFunction(c1);
        });

        it('should be defined', function(){
            assert.defined(c1);
        });

        it('must not be a Boolean', function(){
            refute.isBoolean(c1);
        });
    });
});
