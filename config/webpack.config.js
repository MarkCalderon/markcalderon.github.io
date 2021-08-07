const path = require('path');

module.exports = {
    entry: '/src/js/Index.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, '../build/_assets/js/'),
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