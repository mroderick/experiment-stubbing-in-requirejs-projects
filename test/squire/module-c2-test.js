define(['vendor/squire/src/Squire'], function(Squire){

    'use strict';

    var assert = buster.assert,
        refute = buster.refute;

    describe('c2', function(){
        var injector = new Squire(),
            c2;

        beforeAll(function(done){
            injector.require(
                ['src/c2'],
                function succes(moduleLoaded){
                    c2 = moduleLoaded;
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
            assert.isFunction(c2);
        });

        it('should be defined', function(){
            assert.defined(c2);
        });

        it('must not be a Boolean', function(){
            refute.isBoolean(c2);
        });
    });
});
