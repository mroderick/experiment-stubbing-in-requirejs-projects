define(['vendor/squire/src/Squire'], function(Squire){

    'use strict';

    var assert = buster.assert;



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
                    // Calculator threw an error loading.
                    done(err);
                }
            );
        });

        it('should be a constructor', function(){
            assert.isFunction(a);
        });
    });
});
