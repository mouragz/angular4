const webpack = require('webpack');
const helpers = require('./helpers');

/*
 * Webpack Plugins
 */

const NormalModuleReplacementPlugin = require('webpack/lib/NormalModuleReplacementPlugin');
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackExcludeAssetsPlugin = require('html-webpack-exclude-assets-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const WebpackRTLPlugin = require('webpack-rtl-plugin');

module.exports = {
  entry: {
    'polyfills': './src/polyfills.ts',
    'vendor': './src/vendor.ts',
    'main': './src/main.ts'
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    modules: [helpers.root('src'), helpers.root('node_modules')]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loaders: [
          {
            loader: 'awesome-typescript-loader',
            options: { configFileName: helpers.root('src', 'tsconfig.json') }
          }, 'angular2-template-loader'
        ],
        exclude: [/\.(spec|e2e)\.ts$/]
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file-loader?name=assets/[name].[hash].[ext]'
     //   loader: 'url-loader?name=assets/[name].[hash].[ext]'
      },
      // {
     //   test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
      //  loader: 'file-loader'
     //   loader: 'url-loader?name=assets/[name].[hash].[ext]'
     //},
     
     /*{
       test: /.(png|jpg|jpeg|gif|svg|woff|woff2|eot|ttf)(\?v=\d+\.\d+\.\d+)?$/,
       loader: 'file-loader',
     },*/
      {
        test: /\.scss$/,
        exclude: helpers.root('src', 'app'),
        loader: ExtractTextPlugin.extract('css-loader!sass-loader')
      },
      {
        test: /\.scss$/,
        include: helpers.root('src', 'app'),
        loaders: [
          'raw-loader',
          'sass-loader?' +
          'includePaths[]=' + helpers.root('node_modules/angular-bootstrap-md/scss/angular/mdb-angular-free')
          //'includePaths[]=' + helpers.root('node_modules/bootstrap/scss')
          //+'&includePaths[]=' + helpers.root('src/libs/font-awesome/scss')
          //+'&includePaths[]=' + helpers.root('node_modules/mdbootstrap/font/roboto')
        ] // sass-loader not scss-loader
      },
      {
        test: /\.html$/,
        use: 'raw-loader',
        exclude: [helpers.root('src/index.html')]
      },
    ]
  },

  plugins: [
    // Workaround for angular/angular#11580
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)@angular/,
      helpers.root('./src'), // location of your src
      {} // a map of your routes
    ),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),
    new CopyWebpackPlugin([
      { from: 'src/assets/i18n', to: 'assets/i18n' },
    ]),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      // excludeAssets: [/shared.*.js/, /shared.*.css/]
      excludeAssets: [/main.*.css/]
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'defer'
    }),
    new HtmlWebpackExcludeAssetsPlugin(),
    new ExtractTextPlugin('[name].css'),
    new WebpackRTLPlugin(),
    //new ExtractTextPlugin('[name].[hash].css'),
  ]
};

