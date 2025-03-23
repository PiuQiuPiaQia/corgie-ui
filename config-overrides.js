module.exports = function override(config, env) {
    // config.output.filename = 'static/js/[hash].bundle.js';
    
    // 修改 babel-loader 配置，排除 bitset.min.js
    const babelLoaderRule = config.module.rules
        .find(rule => rule.oneOf)
        .oneOf.find(rule => rule.loader && rule.loader.includes('babel-loader'));
    
    if (babelLoaderRule) {
        babelLoaderRule.exclude = /bitset\.min\.js$/;
    }

    // 添加对 bitset.min.js 的特殊处理
    config.module.rules.push({
        test: /bitset\.min\.js$/,
        use: {
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
                outputPath: 'static/js/'
            }
        }
    });

    config.module.rules.push({
        test: /\.worker\.js$/,
        loader: "worker-loader",
        options: {
            filename: '[name].worker.js'
        },
    });
    return config;
};
