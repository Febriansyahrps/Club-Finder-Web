const path = require("path")
const htmlWebpackPlugin = require("html-webpack-plugin")

module.exports= {
    entry: "./src/app.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },

    module:{
        rules:[
            {
                test: /\.css/,
                use:[
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            },
        ]
    },
    plugins: [
        new htmlWebpackPlugin (
            {
                template: "./src/index.html",
                filename: "./index.html"
            }
        )
    ]
}
