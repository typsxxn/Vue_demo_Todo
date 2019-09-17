import Vue from 'vue'

new Vue({
    el: '#root',
    template: '<div><p>obj.a: <input type="text" v-model="obj.a"></p><p>Name: {{name}}</p><p>Name: {{getName()}}</p><p>Number: {{number}}</p><p>fullName: {{fullName}}</p> <p><input type="text" v-model="number"></p><p>firstName: <input type="text" v-model="firstName"></p><p>lastName<input type="text" v-model="lastName"></p><p>newName<input type="text" v-model="name"></p></div>',
    data: {
        firstName: 'hello',
        lastName: 'computed',
        number: 0,
        fullName: '',
        obj: {
            a: '123'
        }
    },
    computed: {

        name: {
            get() {
                console.log('new name')
                return this.firstName + " " + this.lastName
            },
            set(name) {
                const names = name.split(' ')
                this.firstName = names[0]
                this.lastName = names[1]
            }

        }
    },
    watch: { //监听到某个数据变化，做某个指定操作
        // firstName: {
        // this.fullName = newName + ' ' + oldName
        // handler(newName, oldName) {
        //     this.fullName = newName + ' ' + oldName
        // },
        // immediate: true,
        //deep:true
        // }
        // 'obj.a': {
        //     handler() {
        //         console.log('obj.a changed')
        //     },
        //     immediate: true,
        //     deep: true
        // }
    },
    methods: {
        getName() {
            console.log('new name1')
            return this.firstName + " " + this.lastName
        }
    }
})
