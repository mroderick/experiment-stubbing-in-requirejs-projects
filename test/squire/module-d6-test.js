define(['vendor/squire/src/Squire'], function(Squire){

    'use strict';

    var assert = buster.assert,
        refute = buster.refute;

    describe('d6', function(){
        var injector = new Squire(),
            d6;

        beforeAll(function(done){
            injector.require(
                ['src/d6'],
                function succes(moduleLoaded){
                    d6 = moduleLoaded;
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
            assert.isFunction(d6);
        });

        it('should be defined', function(){
            assert.defined(d6);
        });

        it('must not be a Boolean', function(){
            refute.isBoolean(d6);
        });
    });
});
