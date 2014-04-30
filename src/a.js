window.sourceFilesLoaded = window.sourceFilesLoaded ? window.sourceFilesLoaded + 1 : 1;

define(['./b1', './b2', './shared-dependency'], function(b1, b2, SharedDependency){
    return function(){};
});
