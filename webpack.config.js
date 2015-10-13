var path = require("path");
var webpack = require("webpack");



module.exports = {
    entry: "./client/js/app.jsx",
    debug: true, // Gives us sourcemapping
    resolve: {
        //root: [path.join(__dirname, "bower_components")],
        modulesDirectories: [
            ".",
            "bower_components",
            //"node_modules"
        ],
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
        ),
        new webpack.SourceMapDevToolPlugin(
            'form.js.map', null,
            "[absolute-resource-path]", "[absolute-resource-path]")
    ],
    output: {
        publicPath: ".",
        filename: "./public/js/app.js"
    },
    module: {
        loaders: [
            {
                //tell webpack to use jsx-loader for all *.jsx files
                test: /\.jsx$/,
                loader: 'jsx-loader?insertPragma=React.DOM&harmony'
            }
        ]
    },
    externals: {
        //don't bundle the 'react' npm package with our bundle.js
        //but get it from a global 'React' variable
        //'react': 'React'
    },

};

