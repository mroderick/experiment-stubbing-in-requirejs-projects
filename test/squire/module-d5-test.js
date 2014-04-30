define(['vendor/squire/src/Squire'], function(Squire){

    'use strict';

    var assert = buster.assert,
        refute = buster.refute;

    describe('d5', function(){
        var injector = new Squire(),
            d5;

        beforeAll(function(done){
            injector.require(
                ['src/d5'],
                function succes(moduleLoaded){
                    d5 = moduleLoaded;
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
            assert.isFunction(d5);
        });

        it('should be defined', function(){
            assert.defined(d5);
        });

        it('must not be a Boolean', function(){
            refute.isBoolean(d5);
        });
    });
});
