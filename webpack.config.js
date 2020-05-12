const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// HtmlWebpackPlugin will create an index.html
// file inside /dist

// webpack will bundle our modules together,
// starting at out entry
// then it will create a new folder,
// at the root of our folder, called dist
// it will call that 'index_bundle.js'

// aside: __dirname is a local var, it's a string

// we set rules to tell babel what to transform this
// first rule tells babel to run the babel-loader
// transformation every time it sees a js file
// the second rule:
// for any css file: run style-loader and css-loader
// css-loader makes a browser readable require statement
// style-loader makes browser-readable css

// mode: either dev or production

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]}
    ]
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html'
    })
  ]
}
