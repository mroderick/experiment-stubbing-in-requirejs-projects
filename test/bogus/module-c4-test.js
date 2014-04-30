define(['vendor/bogus/bogus'], function(bogus){

    'use strict';

    var assert = buster.assert,
        refute = buster.refute;

    describe('c4', function(){
        var c4;

        beforeAll(function(done){
            bogus.requireWithStubs('src/c4', function succes(moduleLoaded){
                c4 = moduleLoaded;
                done();
            });
        });

        afterAll(function(done){
            bogus.reset(done);
        });

        it('should be a constructor', function(){
            assert.isFunction(c4);
        });

        it('should be defined', function(){
            assert.defined(c4);
        });

        it('must not be a Boolean', function(){
            refute.isBoolean(c4);
        });
    });
});
