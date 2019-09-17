import Vue from 'vue'

new Vue({
    el: '#root',
    // template: '<div :id="aaa" @click="handleClick"> <p v-html="html"></p> </div>',
    // template: '<div :class="{active: isActive}"> <p v-html="html"></p> </div>',
    template: '<div :class="{active: isActive}" :style="styles">{{getJoinedArr(arr)}} </div>',

    data: {
        isActive: true,
        html: '<span>123</span>',
        aaa: 'main',
        arr: [1, 2, 3],
        styles: {
            color: 'red',
            // apperence: 'none'
        },
        styles1: {
            color: 'black'
        }
    },
    methods: {
        handleClick() {
            alert('clicked')
        },
        getJoinedArr(arr) {
            return arr.join('')
        }
    },
    computed: {

    }
})
