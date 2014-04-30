define(['vendor/squire/src/Squire'], function(Squire){

    'use strict';

    var assert = buster.assert,
        refute = buster.refute;

    describe('b2', function(){
        var injector = new Squire(),
            b2;

        beforeAll(function(done){
            injector.require(
                ['src/b2'],
                function succes(moduleLoaded){
                    b2 = moduleLoaded;
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
            assert.isFunction(b2);
        });

        it('should be defined', function(){
            assert.defined(b2);
        });

        it('must not be a Boolean', function(){
            refute.isBoolean(b2);
        });
    });
});
