var path = require('path');

module.exports = function (pdir_, dir_) {
    var pdir = path.resolve(path.normalize(pdir_)) + '/';
    var dir = path.resolve(pdir, path.normalize(dir_));
    return dir.slice(0, pdir.length) === pdir;
};
