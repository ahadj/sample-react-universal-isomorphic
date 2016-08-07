require('babel-register')({
    only: /src/,
    extensions: ['.jsx', '.js'],
    presets: [
        'es2015',
        'react'
    ]
});

require('babel-polyfill');
require('./src');
