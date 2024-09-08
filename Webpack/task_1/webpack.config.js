const path = require('path');

module.exports = {
  mode: 'production', // Set Webpack mode to production
  entry: './js/dashboard_main.js', // Entry point for your JavaScript
  output: {
    filename: 'bundle.js', // Name of the generated JavaScript file
    path: path.resolve(__dirname, 'public'), // Output directory (public)
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Apply this rule to JavaScript files
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
};
