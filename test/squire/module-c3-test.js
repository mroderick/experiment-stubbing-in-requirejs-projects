define(['vendor/squire/src/Squire'], function(Squire){

    'use strict';

    var assert = buster.assert,
        refute = buster.refute;

    describe('c3', function(){
        var injector = new Squire(),
            c3;

        beforeAll(function(done){
            injector.require(
                ['src/c3'],
                function succes(moduleLoaded){
                    c3 = moduleLoaded;
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
            assert.isFunction(c3);
        });

        it('should be defined', function(){
            assert.defined(c3);
        });

        it('must not be a Boolean', function(){
            refute.isBoolean(c3);
        });
    });
});
