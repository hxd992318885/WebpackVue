import Vue from 'vue'
import App from './app.vue'
//引入所需要分析的页面
import './assets/style/global.styl'

const root = document.createElement('div')
document.body.appendChild(root)

new Vue({
  render: (h) => h(App)
}).$mount(root)