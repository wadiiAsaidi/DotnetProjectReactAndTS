const path = require("path");

module.exports = {
    mode: "development", // Change to "production" for optimized builds
    entry: "./ClientApp/src/index.tsx",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "./wwwroot/dist"),
        publicPath: "/dist/"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    }
};
