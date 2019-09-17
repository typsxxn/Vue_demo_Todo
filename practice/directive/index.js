import Vue from 'vue'

new Vue({
    el: '#root',
    // template: '<div><input v-text="text" v-model.number="text" v-model.trim="text" v-model.lazy="text">{{text}}</div>',
    template: '<div><input v-text="text" v-model.lazy="text">{{text}}</div>',
    // template: '<div v-html="html"></div>',
    // template: '<div v-show="active">{{text}}</div>',//只控制是否显示
    // template: '<div v-if="active">{{text}}</div>', //增删dom节点
    // template: '<div v-if="active">{{text}}</div>', //
    //template: '<div><ul v-for="(item,index) in arr" :key="item">{{item}}:{{index}}</ul></div>',
    //template: '<div><ul  v-for="(val,key,index) in obj">{{key}}:{{val}}:{{index}}</ul></div>', //
    //template: '<div><input type="checkbox" v-model="active">{{active}}</div>', /
    //template: '<div><input type="checkbox" v-model="arr" :value="1"><input type="checkbox" v-model="arr" :value="2"><input type="checkbox" v-model="arr" :value="3"></div>',
    //template: '<div><input type="radio" value="one" v-model="picked"><input type="radio" value="two" v-model="picked">{{picked}}</div>',
    // <input v-model> v-pre  v-cloak 直接在页面引入vue库代码 v-once只改变一次节省性能开销
    data: {
        text: 0,
        active: false,
        html: '<span>this is html</span>',
        arr: [1, 2, 3, 4],
        obj: {
            a: '123',
            b: '456',
            c: '789'
        },
        picked: 'one'
    }
})
