import Vue from 'vue'

const component = {
    model: {
        prop: 'value1',
        event: 'change'
    },
    props: ['value', 'value1'],
    data() {
        return {

        }
    },
    template: '<div><input type="text" @input="handleInput" :value="value1"></div>',

    methods: {
        handleInput(e) {
            this.$emit('change', e.target.value)
        }
    },
}


new Vue({
    name: 'comp1',
    components: {
        CompOne: component
    },

    el: '#root',
    data() {
        return {
            value: '123'
        }
    },
    // template: '<div><comp-one :value="value" @input="value=arguments[0]"></comp-one></div>',
    template: '<div><comp-one v-model="value"></comp-one></div>',
    mounted() {

    },
})
