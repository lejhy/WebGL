var fs = require('fs');
var webpack = require('webpack');


var models = [];
fs.readdirSync("./public/models/").forEach(file => {
  models.push(file);
});

var gallery = [];
fs.readdirSync("./public/gallery/").forEach(file => {
  gallery.push(file);
});

module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        'webpack.env.MODELS': JSON.stringify(models)
      }),
      new webpack.DefinePlugin({
        'webpack.env.GALLERY': JSON.stringify(gallery)
      })
    ]
  }
};