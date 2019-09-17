import Vue from 'vue'

const app = new Vue({
    // el: '#root',
    template: '<div>{{text}}</div>',
    data: {
        text: 0
    },
    beforeCreate() {
        console.log(this.$el, 'beforeCreate')
    },
    created() {
        console.log(this.$el, 'created')
    },
    beforeMount() {
        console.log(this.$el, 'beforeMount')
    }, //mount将组件内容挂在到dom上
    //render
    mounted() {
        console.log(this.$el, 'mounted')
    },
    beforeUpdate() {
        console.log(this, 'beforeUpdate')
    },
    updated() {
        console.log(this, 'updated')
    },
    actived() {
        console.log(this, ' actived')
    }, //keepalive
    deActived() {
        console.log(this, 'deActived')
    },
    beforeDestroy() {
        console.log(this, 'beforeDestroy')
    },
    destroyed() {
        console.log(this, 'destroyed')
    },
    renderError(h, err) {
        return h('div', {}, err.stack)
    },
    errorCaptured() {
        //会向上冒泡，并且正式环境可以使用
    }
})

app.$mount('#root')
    // setInterval(() => {
    //     app.text = app.text += 1
    // }, 1000)
    // setTimeout(() => {
    //     app.$destroy()
    // }, 2000)
