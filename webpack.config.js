//don't forget to npm install babel-loader
module.exports = {
    devtool: 'inline-sourcemap',
    entry: './src/init/public.js',
    output: {
        path: './public/',
        filename: 'app.js'
    },
    module: {
        loaders: [
            {
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: [
                        'es2015',
                        'react'
                    ]
                }
            }
        ]
    }
};
