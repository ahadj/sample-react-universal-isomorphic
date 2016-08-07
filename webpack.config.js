//don't forget to npm install babel-loader
module.exports = {
    entry: './src/init/public.js',
    output: {
        path: './public/',
        filename: 'build.js'
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
