import Todo from '../views/todo/todo.vue'
import Login from '../views/login/login.vue'

export default [{
        path: '/',
        redirect: '/app'
    },
    {
        path: '/app',
        component: Todo,
        name: 'app',
        meta: {
            title: 'this is app',
            discription: 'appppppppp'
        },
        // path: '/app/:id',
        // props: {
        //     id: 456
        // },
        // props: (route) => ({ id: route.query.b }),
        // components: {
        //     default: Todo,
        //     a: Login
        // },
        // beforeEnter: (to, from, next) => {
        //         console.log('app route befor enter')
        //         next()
        //     }
        // children: [{
        //     path: 'test',
        //     component: Login
        // }]
    },
    {
        path: '/login',
        component: Login
            // components: {
            //     default: Login,
            //     a: Todo
            // }
    }
]
