define(['vendor/squire/src/Squire'], function(Squire){

    'use strict';

    var assert = buster.assert,
        refute = buster.refute;

    describe('d3', function(){
        var injector = new Squire(),
            d3;

        beforeAll(function(done){
            injector.require(
                ['src/d3'],
                function succes(moduleLoaded){
                    d3 = moduleLoaded;
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
            assert.isFunction(d3);
        });

        it('should be defined', function(){
            assert.defined(d3);
        });

        it('must not be a Boolean', function(){
            refute.isBoolean(d3);
        });
    });
});
