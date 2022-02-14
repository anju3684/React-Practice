const { rules } = require('eslint-config-prettier');
const path=require('path');
module.exports = {
    mode: 'development',
    entry: './index.js',
    output: {
      path: path.resolve(__dirname, 'public'),
      filename: 'main.js',
    },
  target:"node",
  devServer:{
      port:"3001",
      //contentBase:["./public"],
      open:true
  },
  resolve:{
    extensions:[".js",".jsx",".json"]
  },
  module:{
      rules:[
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
          }

      ]
  },
  
}