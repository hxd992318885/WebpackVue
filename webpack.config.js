const path = require('path')
const HTMLPluin = require('html-webpack-plugin')  //网页插件
const webpack = require('webpack')
const isDev = process.env.NODE_ENV === 'development'//判断使用何种模式启动的标识

const config = {
    target: 'web',//目标
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')

    },
    module: {

        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',//顺序一旦错误会无法编译
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                        }
                    },
                    'stylus-loader'

                ]
            },
            {
                test: /\.(jpg|png|jpeg|gif|svg)/,
                use: [
                    {
                        loader: 'url-loader',//依赖file-loader
                        options: {
                            limit: 1024,
                            name: '[name].[ext]'//定义文件名
                        }
                    }
                ]
            }

        ]

    },
    plugins: [
        new webpack.DefinePlugin({//开发或生产环境判断,可以被引用
            'process.env': {
                NODE_ENV: isDev ? '"development"' : '"production"'
            }
        }),
        new HTMLPluin()



    ]

}
if (isDev) {
    config.devtool = '#cheap-module-eval-source-map'//调试工具,允许直接调试ES6
    config.devServer = {//服务配置,访问地址为:http://localhost:8000/
        port: 8000,
        host: '0.0.0.0',//可以直接127.0.0.1登录,手机亦可
        overlay: {//可以输出错误报表,查找错误方便
            errors: true
        },
        open: true,//自动打开页面

        hot: true //热加载,数据不会丢失,flase任意修改数据都会刷新
    }
    config.plugins.push(
        new webpack.HotModuleReplacementPlugin(),//启动功能
        new webpack.NoEmitOnErrorsPlugin()//规避多余数据

    )

}
module.exports = config;