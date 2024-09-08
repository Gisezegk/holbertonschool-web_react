const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

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
          loader: 'babel-loader', // Transpile modern JavaScript for older browsers
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // Convert images < 10kb to base64 strings
          },
        },
        use: [
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
              optipng: {
                enabled: true,
              },
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
              webp: {
                quality: 75,
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
    new CleanWebpackPlugin(),
    new ImageMinimizerPlugin({
      minimizerOptions: {
        plugins: [
          ['imagemin-mozjpeg', { quality: 65, progressive: true }],
          ['imagemin-pngquant', { quality: [0.65, 0.90], speed: 4 }],
          ['imagemin-svgo', { plugins: [{ removeViewBox: false }] }],
        ],
      },
    }),
  ],
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
      `...`, // Extend default minimizers to include CSS minimization
    ],
  },
};
