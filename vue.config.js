module.exports = {
    devServer: {
        inline: true,
        hot: true,
        stats: 'minimal',
        contentBase: __dirname,
        overlay: true,
        historyApiFallback: true,
        open: true // 启动后是否自动打开网页
    }
}