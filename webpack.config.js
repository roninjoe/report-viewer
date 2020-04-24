// webpack.config.js
module.exports = {
    mode : 'development',
    entry : './public/ui/app.js',
    output : {
        filename : 'main.js',
        publicPath : 'dist'
    }
}