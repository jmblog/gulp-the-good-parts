var path = require("path");
var root = path.resolve(__dirname + '/..');

module.exports = {
  root: root,
  clean: {
    src: [ root + "/.tmp/*", root + "/dist/*" ]
  },
  "styles": {
    "src": ["src/styles/**/!(_)*.{sass.scss}"],
    "dest": "dist/styles"
  },
  "options": {
    "sass": {
      "includePaths": [ "node_modules/" ],
      "outputStyle": "compressed"
    }
  }
}
