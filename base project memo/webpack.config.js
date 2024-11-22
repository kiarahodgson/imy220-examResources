const path = require('path');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve('public'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'], 
},
  mode: 'development',
  module: {
    rules: [
      {
        test:  /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
    ]
  }
};


// optional:
// const path = require('path');
// module.exports = {
//   entry: './src/index.js', // Entry point of your app
//   output: {
//       path: path.resolve(__dirname, 'dist'), // Output directory
//       filename: 'bundle.js', // Output file
//   },
//   module: {
//       rules: [
//           {
//               test: /\.jsx?$/, // Match .js and .jsx files
//               exclude: /node_modules/,
//               use: {
//                   loader: 'babel-loader', // Use Babel for transpiling
//               },
//           },
//       ],
//   },
//   resolve: {
//       extensions: ['.js', '.jsx'], // Resolve JS and JSX extensions
//   },
//   devServer: {
//       static: './dist', // Serve files from the dist folder
//       port: 3000,
//   },
//   mode: 'development', // Set mode to development
// };
