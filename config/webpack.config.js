const path = require('path');

module.exports = {
    entry: '/src/js/Index.js',
    mode: 'production',
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, '../build/_assets/js/'),
        // path: path.resolve(__dirname, '../_assets/js/'),
        filename: 'main.js',
    },
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ]
    }
};