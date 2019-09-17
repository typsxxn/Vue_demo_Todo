import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './app.vue'

import './assets/styles/global.styl'
import creatRouter from './config/router'
import creatStore from './store/store'

Vue.use(VueRouter)
Vue.use(Vuex)

const router = creatRouter()
const store = creatStore()



store.subscribeAction((action, state) => {
    console.log(action.type)
    console.log(action.payload)
})
new Vue({
    router,
    store,
    render: (h) => h(App)
}).$mount('#root')
