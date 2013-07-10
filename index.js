var path = require('path');

module.exports = function (pdir_, dir_) {
    var pdir = path.resolve(path.normalize(pdir_)) + (path.sep || '/');
    var dir = path.resolve(pdir, path.normalize(dir_));
    if (pdir === '//') pdir = '/';
    return dir.slice(0, pdir.length) === pdir;
};
