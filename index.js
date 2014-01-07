var path = require('path');
var createCssPreprocessor = function(args) {
  var transformPath = function(filepath) {
    return filepath.replace(/\..+$/, '.css');
  };

  return function(content, file, done) {
    file.path = transformPath(file.originalPath);

    done("");
  };
};

createCssPreprocessor.$inject = ['args'];

// PUBLISH DI MODULE
module.exports = {
  'preprocessor:empty-css': ['factory', createCssPreprocessor]
};
