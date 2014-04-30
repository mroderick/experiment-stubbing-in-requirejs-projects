define(['vendor/squire/src/Squire'], function(Squire){

    'use strict';

    var assert = buster.assert,
        refute = buster.refute;

    describe('d1', function(){
        var injector = new Squire(),
            d1;

        beforeAll(function(done){
            injector.require(
                ['src/d1'],
                function succes(moduleLoaded){
                    d1 = moduleLoaded;
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
