/*
 * @Author: 王伟斌
 * @Date: 2020-12-10 16:35:44
 * @LastEditors: 王伟斌
 * @LastEditTime: 2020-12-11 17:32:50
 * @FilePath: \mobile\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Cell, CellGroup, Button, Form, Field, NoticeBar, Picker, Popup, Toast } from 'vant'
import 'vant/lib/index.css'

import axios from 'axios'
Vue.use(Button).use(Form).use(Field).use(Cell).use(CellGroup).use(NoticeBar).use(Picker).use(Popup)
Vue.config.productionTip = false

Vue.prototype.$Toast = Toast
Vue.prototype.$axios = axios
new Vue({
    router,
    render: h => h(App)
}).$mount('#app')