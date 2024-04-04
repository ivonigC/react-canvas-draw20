const path = require("path");

module.exports = {
  entry: "./src/index.js", // Your entry point, where webpack starts bundling
  output: {
    path: path.resolve(__dirname, "dist"), // Output directory
    filename: "your-package-name.js", // Output file name
    library: "YourPackageName", // The name of the global variable to expose in browsers
    libraryTarget: "umd", // Universal module definition for wide compatibility
    globalObject: "this", // Ensures compatibility with both browser and Node environments
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Transpile all .js files
        exclude: /node_modules/, // Except for node_modules
        use: {
          loader: "babel-loader", // Use babel-loader
          options: {
            presets: ["@babel/preset-env"], // Use the same preset as in .babelrc
          },
        },
      },
    ],
  },
  mode: "production", // Set mode to 'production' for optimizations
};
