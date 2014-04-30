define(['vendor/squire/src/Squire'], function(Squire){

    'use strict';

    var assert = buster.assert,
        refute = buster.refute;

    describe('c1', function(){
        var injector = new Squire(),
            c1;

        beforeAll(function(done){
            injector.require(
                ['src/c1'],
                function succes(moduleLoaded){
                    c1 = moduleLoaded;
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
            assert.isFunction(c1);
        });

        it('should be defined', function(){
            assert.defined(c1);
        });

        it('must not be a Boolean', function(){
            refute.isBoolean(c1);
        });
    });
});
