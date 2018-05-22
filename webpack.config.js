const path = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.glsl$/,
                use: 'raw-loader'
            }
        ]
    },
    devServer: {
        port: 80,
        host: "0.0.0.0",
        disableHostCheck: true
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': path.resolve('src')
        },
        extensions: ['*', '.js', 'vue', '.json']
    }
}