//用于后处理css文件,需要加浏览器前缀,可用autoprefixer来处理
const autoprefixer = require('autoprefixer')

module.exports = {
    plugins: [
        autoprefixer()

    ]

}