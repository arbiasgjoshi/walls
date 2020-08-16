// config/webpack.config.js

const path = require('path');

/**
 * process.cwd will return a path to our active project directory
 * For example on windows will look like:
 * c:\Users\username\project\webpack-boilerplate
 * On Mac:
 * /Users/username/project/webpack-boilerplate
 */
const ROOT_DIRECTORY = process.cwd();
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    /**
     * Define webpack mode
     * Which webpack will set NODE_ENV to 'development'
     * Docs: https://webpack.js.org/configuration/mode/
     */
    mode: 'development',
    /**
     * Here, we tell webpack where entry point of our code
     * If you only have single entry point you can also do it like below
     * entry: path.resolve(ROOT_DIRECTORY, 'src/index.js'),
     * Docs: https://webpack.js.org/configuration/entry-context/
     */
    entry: {
        main: path.resolve(ROOT_DIRECTORY, 'src/index.js'),
    },
    /**
     * Tell webpack where it should output
     * our bundles, assets and anything else
     * In this example it will be inside /build folder
     * Docs: https://webpack.js.org/configuration/output/
     */
    output: {
        path: path.resolve(ROOT_DIRECTORY, 'build'),
        filename: '[name].bundle.js',
        chunkFilename: '[name].chunk.js',
    },
    /**
     * This devServer option is our development server that get picked up by webpack-dev-server
     * Docs: https://webpack.js.org/configuration/dev-server/
     */
    // other configs
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(ROOT_DIRECTORY, 'src/index.html'),
            filename: 'index.html',
        }),
        new HtmlWebpackInlineSVGPlugin(),
    ],

    devServer: {
        // Serves everything from our build folder which is our output folder
        contentBase: path.resolve(ROOT_DIRECTORY, 'build'),
        // Enable gzip compression
        compress: true,
        // Which port we want to use, in this case we use port 3000
        port: 3000,
        // This will shows a full-screen overlay in the browser when there are compiler errors
        overlay: true,
    },
    /**
     * Generate source-maps to make it easier to track down errors and warnings
     * In this example we're using cheap-module-eval-source-map (recommend by webpack)
     * Docs: https://webpack.js.org/configuration/devtool/
     */
    devtool: 'cheap-module-eval-source-map',

    module: {
        /**
         * Here we are kinda tell webpack if it come accross js file
         * Please use babel-loader
         * Docs: https://github.com/babel/babel-loader
         */
        rules: [
            // other module rules

            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        // Enabled cache for faster recompilation
                        cacheDirectory: true,
                        /**
                         * Here we tell babel where to find babel config file
                         * Note that we can also put our babel config (presets and plugins) here
                         * Since Babel 7, using .babelrc filename not recommended
                         * Here we are using the new recommended filename
                         * using babel.config.js filename
                         * Docs: https://babeljs.io/docs/en/config-files
                         */
                        configFile: path.resolve(ROOT_DIRECTORY, 'config/babel.config.js'),
                    },
                },
            },
            {
                test: /\.(jpe?g|png|gif|svg|ico)$/i,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'images/'
                    }
                }]
            },
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        attributes: true
                    }
                }
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            },
            {
                test: /\.css$/,
                exclude: /\.module\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            url: true,
                            import: true,
                            modules: false,
                        },
                    },
                ],
            },
            {
                test: /\.module\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            url: true,
                            import: true,
                            modules: {
                                // Convention name of generated CSS Modules classname
                                localIdentName: '[name]__[local]--[contenthash:8]',
                            },
                        },
                    },
                ],
            },
            {
                test: /\.(sass|scss)$/,
                exclude: /\.module\.(sass|scss)$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            url: true,
                            import: true,
                            modules: false,
                        },
                    },
                    'resolve-url-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                test: /\.module\.(sass|scss)$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            url: true,
                            import: true,
                            modules: {
                                // Convention name of generated CSS Modules classname
                                localIdentName: '[name]__[local]--[contenthash:8]',
                            },
                        },
                    },
                    'resolve-url-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
        ],
    },
};