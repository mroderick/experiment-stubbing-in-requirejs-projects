window.sourceFilesLoaded = window.sourceFilesLoaded ? window.sourceFilesLoaded + 1 : 1;

define(['./d1', './d2', './shared-dependency'], function(d1, d2, SharedDependency){
    return function(){};
});
