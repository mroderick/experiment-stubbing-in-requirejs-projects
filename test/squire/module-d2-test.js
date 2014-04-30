define(['vendor/squire/src/Squire'], function(Squire){

    'use strict';

    var assert = buster.assert,
        refute = buster.refute;

    describe('d2', function(){
        var injector = new Squire(),
            d2;

        beforeAll(function(done){
            injector.require(
                ['src/d2'],
                function succes(moduleLoaded){
                    d2 = moduleLoaded;
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
