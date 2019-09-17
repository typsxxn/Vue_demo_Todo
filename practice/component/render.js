import Vue from 'vue'

const childComponent = {
    template: '<div>child component</div>',
    mounted() {
        console.log()
    },
}


const component = {
    name: 'comp',
    components: {
        childComp: childComponent
    },
    props: ['prop1'],
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
    // template: '<div :style="style"><slot ></slot></div>',
    render(createElement) {
        return createElement('div', {
            style: this.style,
            // on: {
            //     click: () => { this.$emit('click') }
            // }
        }, [this.$slots.header, this.prop1])
    },
    methods: {

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
    mounted() {
        console.log(this.$refs.comp.value)
    },
    // template: '<div><comp-one ref="comp"><span ref="span">{{value}}</span> </comp-one> </div>',
    render(createElement) {
        return createElement('comp-one', {
            ref: 'comp',
            props: {
                prop1: this.value
            },
            // on: {
            //     click: this.handleClick
            // },
            nativeOn: {
                click: this.handleClick
            }, //自动绑定到组件根节点

        }, [createElement('span', {
            ref: 'span',
            slot: 'header',
            // domProps: {
            //     innerHTML: '<span>456</span>'
            // }//覆盖
            attrs: {
                id: 'test-id'
            }
        }, this.value)])
    },
    methods: {
        handleClick() {
            console.log('clicked')
        }
    }
})
