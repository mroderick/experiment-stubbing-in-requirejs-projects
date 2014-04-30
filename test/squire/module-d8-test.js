define(['vendor/squire/src/Squire'], function(Squire){

    'use strict';

    var assert = buster.assert,
        refute = buster.refute;

    describe('d8', function(){
        var injector = new Squire(),
            d8;

        beforeAll(function(done){
            injector.require(
                ['src/d8'],
                function succes(moduleLoaded){
                    d8 = moduleLoaded;
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
