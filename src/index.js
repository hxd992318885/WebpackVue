import Vue from 'vue'
import App from './app.vue'
//引入所需要分析的页面
import './assets/style/test.css'
import './assets/images/20161002111216_PVtxh.jpeg'
const root = document.createElement('div')
document.body.appendChild(root)

new Vue({
  render: (h) => h(App)
}).$mount(root)