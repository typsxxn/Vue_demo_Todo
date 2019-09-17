import Vue from 'vue'

const childComponent = {
    template: '<div>child component{{data.value}}</div>',
    inject: ['yeye', 'data'],
    mounted() {
        // console.log(this.$parent.$options.name)
        console.log(this.yeye, this.data)
    },
}

const component = {
    name: 'comp',
    components: {
        childComp: childComponent
    },
    props: [],
    data() {
        return {
            style: {
                width: '200px',
                height: '200px',
                border: '1px solid #aaa'
            },
            value: 'component value'
        }
    },
    // template: '<div :style="style"><div class="header"><slot name="header"></slot></div><div class="body"><slot name="body"></slot></div></div>',
    template: '<div :style="style"><slot :value="value" aaa="789"></slot><child-comp></child-comp></div>',
    methods: {

    },
}


new Vue({
    name: 'comp1',
    components: {
        CompOne: component
    },
    provide() {
        const data = {}
        Object.defineProperty(data, 'value', {
            get: () => this.value,
            enumerable: true
        })
        return {
            yeye: this,
            data
        }
    },
    el: '#root',
    data() {
        return {
            value: '123'
        }
    },

    // template: '<div><comp-one><span slot="header">this is header</span><span slot="body">this is body</span></comp-one></div>',
    template: '<div><comp-one><span slot-scope="props">{{props.value}} {{props.aaa}}</span> </comp-one> <input type="text" v-model="value"></div>',
    mounted() {

    },
})
