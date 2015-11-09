/**
 * Created by alex on 12.10.2015.
 */

var path = require("path"),
    gulp = require('gulp'),
    source = require('vinyl-source-stream'), // Used to stream bundle for further handling etc.
    browserify = require('browserify'),
    watchify = require('watchify'),
    reactify = require('reactify'),
    gutil = require("gulp-util"),
    webpack = require("webpack");


var conf = {
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
            './public/js/app.js.map', null,
            "[absolute-resource-path]", "[absolute-resource-path]")
    ],
    output: {
        publicPath: ".",
        filename: "./public/js/app.js"
    },
    module: {
        loaders: [{
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react']
            }
        }]
    },
    externals: {
        //don't bundle the 'react' npm package with our bundle.js
        //but get it from a global 'React' variable
        "underscore": '_',
        "jquery": "$",
        "react-dom": 'ReactDOM',
        "react": 'React',
        "backbone": 'Backbone',
        "backbone.validation": "Backbone.validation",
    },
    watch: true
};


gulp.task('webpack', function () {
    return webpack(conf, function (err, stats) {
        if (err)
            throw new gutil.PluginError("webpack", err);
        else
            gutil.log("[webpack]", stats.toString({
                // output options
            }));
    });
});

