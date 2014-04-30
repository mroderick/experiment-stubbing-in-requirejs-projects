define(['vendor/squire/src/Squire'], function(Squire){

    'use strict';

    var assert = buster.assert,
        refute = buster.refute;

    describe('d7', function(){
        var injector = new Squire(),
            d7;

        beforeAll(function(done){
            injector.require(
                ['src/d7'],
                function succes(moduleLoaded){
                    d7 = moduleLoaded;
                    done();
                },
                function error(err){
                    done(err);
                }
            );
        });

        afterAll(function(){
            injector.clean();
        });

        it('should be a constructor', function(){
            assert.isFunction(d7);
        });

        it('should be defined', function(){
            assert.defined(d7);
        });

        it('must not be a Boolean', function(){
            refute.isBoolean(d7);
        });
    });
});
