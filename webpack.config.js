// webpack.config.js
var path = require('path');
module.exports = {
    mode : 'development',
    entry : './src/js/report/ui/app.js',
    output : {
        filename : 'report-viewer.js',
        path : path.resolve('./public/ui/')
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ]
      }
}