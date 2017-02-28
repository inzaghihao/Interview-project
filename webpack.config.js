var HtmlWebpackPlugin = require("html-webpack-plugin");
var webpack = require("webpack");

let hao = "hao";

module.exports = {
    entry:{
       // "index":__dirname+"/src/js/index.js"
        "index":[__dirname+"/src/js/index.js",
        "webpack-dev-server/client?http://127.0.0.1:8080"]
    },
    output:{
       publicPath:"http://127.0.0.1:8080/",
        path:__dirname+"/src/dist/js",
        filename:"[name].js"
    },
    resolve:{
        alias:{
            vue:"vue/dist/vue.js"
        }
    },
    module:{
        loaders:[
            {test: /\.css$/,loader:'style!css'},
            {test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,loader: 'file',query: {name: '[name].[ext]?[hash]'}},
            {test:/\.js$/,loader:"babel",query:{compact:true}},
            {test:/\.vue$/,loader:"babel!vue", exclude:"/node_modules/"},
            {test:/\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,loader:"file" }

        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            //filename:__dirname+"/src/dist/index.html",
            filename:"index.html",
            template:__dirname+"/src/html/index.html",
            inject:"body",
            hash:true,
            chunks:["index"]
        })
    ]
}



