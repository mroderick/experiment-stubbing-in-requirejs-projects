window.sourceFilesLoaded = window.sourceFilesLoaded ? window.sourceFilesLoaded + 1 : 1;

define(['./c1', './c2', './shared-dependency'], function(c1, c2, SharedDependency){
    return function(){};
});
