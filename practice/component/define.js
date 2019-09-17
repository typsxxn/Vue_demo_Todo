import Vue from 'vue'

const component = {
    props: {
        active: {
            type: Boolean,
            require: true,
            default: false
        },
        propOne: String,
    },
    data() {
        return {
            text: 123
        }
    },
    template: '<div><input type="text" v-model="text"><span @click="handleChange">{{propOne}}</span> <span v-show="active">see me if active</span></div>',

    methods: {
        handleChange() {
            this.$emit('change')
        }
    },
}

new Vue({
    components: {
        CompOne: component
    },
    el: '#root',
    data() {
        return {
            prop1: "text1"
        }

    },
    template: '<div><comp-one :active="true" :prop-one="prop1" @change="handleChange"></comp-one ><comp-one :active="true" propOne="text2"></comp-one></div>',
    methods: {
        handleChange() {
            this.prop1 += 1
        }
    },
})
