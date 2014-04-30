define(['vendor/squire/src/Squire'], function(Squire){

    'use strict';

    var assert = buster.assert,
        refute = buster.refute;

    describe('d4', function(){
        var injector = new Squire(),
            d4;

        beforeAll(function(done){
            injector.require(
                ['src/d4'],
                function succes(moduleLoaded){
                    d4 = moduleLoaded;
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
