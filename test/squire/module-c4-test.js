define(['vendor/squire/src/Squire'], function(Squire){

    'use strict';

    var assert = buster.assert,
        refute = buster.refute;

    describe('c4', function(){
        var injector = new Squire(),
            c4;

        beforeAll(function(done){
            injector.require(
                ['src/c4'],
                function succes(moduleLoaded){
                    c4 = moduleLoaded;
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
            assert.isFunction(c4);
        });

        it('should be defined', function(){
            assert.defined(c4);
        });

        it('must not be a Boolean', function(){
            refute.isBoolean(c4);
        });
    });
});
