var path = require("path");
var root = path.resolve(__dirname + '/..');

module.exports = {
  root: root,
  src:  root + '/src',
  dest: root + '/dist',
  sassOptions: {
    includePaths: [ "node_modules/" ],
    outputStyle: "compressed"
  }
}
