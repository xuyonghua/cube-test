module.exports = {
    baseUrl: process.env.NODE_ENV === 'production' ? '/cube-test/' : '/',
    css: {
        loaderOptions: {
            stylus: {
                'resolve url': true,
                'import': [
                    './src/theme'
                ]
            }
        }
    },
    pluginOptions: {
        'cube-ui': {
            postCompile: true,
            theme: true
        }
    },
    lintOnSave: true,
    productionSourceMap: false,
    // devServer:{type:Object} 3个属性host,port,https
    // 它支持webPack-dev-server的所有选项
    devServer: {
        port: 8085, // 端口号
        host: 'localhost',
        https: false, // https:{type:Boolean}
        open: true, //配置自动启动浏览器
        // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
        proxy: {
            '/api': {
                target: '<url>',
                ws: true,
                changeOrigin: true
            },
            '/foo': {
                target: '<other_url>'
            }
        },  // 配置多个代理
    }
}
