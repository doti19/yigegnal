
const webpack = require('webpack');
module.exports = function override(config){
    const fallback = config.resolve.fallback || {};
    Object.assign(fallback, {
        // "crypto": require.resolve("crypto-browserify"),
        // "stream": require.resolve("stream-browserify")
        "path": false,
        "stream": require.resolve("stream-browserify"),
        "querystring": require.resolve("querystring-es3"),
        "http": require.resolve("stream-http"),
        "crypto": require.resolve("crypto-browserify"),
        "zlib": require.resolve("browserify-zlib"),
        "assert": require.resolve("assert/"),
        "util": requier.resolve("util/")
        



    });

    config.resolve.fallback = fallback;
    return config;

}