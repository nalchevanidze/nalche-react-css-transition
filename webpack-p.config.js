const WebpackStripLoader = require("strip-loader");
const devConfig = require("./webpack.config.js");
devConfig.module.rules.push({
    test: /\.js$/ ,
    exclude: /node_modules/,
    loader: WebpackStripLoader.loader("console.log")
});
module.exports = devConfig;
