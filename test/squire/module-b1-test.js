define(['vendor/squire/src/Squire'], function(Squire){

    'use strict';

    var assert = buster.assert,
        refute = buster.refute;

    describe('b1', function(){
        var injector = new Squire(),
            b1;

        beforeAll(function(done){
            injector.require(
                ['src/b1'],
                function succes(moduleLoaded){
                    b1 = moduleLoaded;
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
            assert.isFunction(b1);
        });

        it('should be defined', function(){
            assert.defined(b1);
        });

        it('must not be a Boolean', function(){
            refute.isBoolean(b1);
        });
    });
});
