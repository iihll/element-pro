/**
 * 公共配置
 */
const path = require('path')
const webpack = require('webpack')
const pkg = require('../package.json')
const { VueLoaderPlugin } = require('vue-loader')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  // 加载器
  module: {
    // https://doc.webpack-china.org/guides/migrating/#module-use-module-rules
    rules: [
      {
        // https://vue-loader.vuejs.org/en/configurations/extract-css.html
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          sourceMap: true,
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(gif|jpg|jpeg|woff2|svg|svgz|png|woff|svg|eot|ttf)\??.*$/,
        type: 'asset/resource',
        // use: [
        //   {
        //     loader: 'url-loader',
        //     options: {
        //       limit: 8192,
        //     },
        //   },
        // ],
      },
      {
        test: /\.(html|tpl)$/,
        loader: 'html-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      vue: 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    },
  },
  plugins: [
    // new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.DefinePlugin({
      'process.env.VERSION': `'${pkg.version}'`,
    }),
    new VueLoaderPlugin(),
  ],
}
