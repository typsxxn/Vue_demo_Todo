import Vue from 'vue'

const component = {
    props: {
        active: Boolean,
        propOne: String
    },
    data() {
        return {
            text: 0
        }
    },
    template: '<div><input type="text" v-model="text"><span @click="handleChange">{{propOne}}</span> <span v-show="active">see me if active</span></div>',

    methods: {
        handleChange() {
            this.$emit('change')
        }
    },
}
const parent = new Vue({
    name: 'parent'
})
const component2 = {

    extends: component,
    data() {
        return {
            text: 1
        }
    },
    mounted() {
        console.log(this.$parent.$options.name)
            // this.$parent.text = '12345'
    },
}
const compVue = Vue.extend(component)


// new compVue({
//     el: '#root',
//     propsData: {
//         propOne: 'xxx'
//     },
//     data() {
//         return {
//             text: 123
//         }
//     }
// })
new Vue({
    parent: parent,
    name: 'comp2',
    components: {
        CompTwo: component2
    },
    el: '#root',
    data() {
        return {
            text: 233333
        }
    },
    template: '<div><span>{{text}}</span><comp-two></comp-two></div>',
    mounted() {
        console.log(this.$parent.$options.name)
            // this.$parent.text = '12345'
    },
})
