define(['vendor/squire/src/Squire'], function(Squire){

    'use strict';

    var assert = buster.assert,
        refute = buster.refute;

    describe('a', function(){
        var injector = new Squire(),
            a;

        beforeAll(function(done){
            injector.require(
                ['src/a'],
                function succes(moduleLoaded){
                    a = moduleLoaded;
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
            assert.isFunction(a);
        });

        it('should be defined', function(){
            assert.defined(a);
        });

        it('must not be a Boolean', function(){
            refute.isBoolean(a);
        });
    });
});
