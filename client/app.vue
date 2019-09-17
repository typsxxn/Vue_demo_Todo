<template>
  <div id="app">
      <div id="cover"></div>
      <Header></Header>
      
      <transition name="fade">
        <router-view></router-view>
      </transition>
      <button @click="notify">click me</button>
      <!-- <notification content="test notify" ></notification> -->
      <Footer></Footer>
  </div>
</template>

<script>
import{
  mapState,
  mapGetters,
  mapActions,
  mapMutations
}from 'vuex'
import Header from './views/layout/header.vue'
import Footer from './views/layout/footer.jsx'
import Todo from './views/todo/todo.vue'
import { setInterval } from 'timers';

export default {
  metaInfo:{
    title:'Todo App'
  },
    components:{
        Header,
        Footer,
        Todo
    },
    mounted(){
      // console.log(this.$store)

    },
    computed:{
      // ...mapState({
      //   counter:(state)=>state.count,
      //   }),
      // ...mapGetters({
      //   'fullName':'fullName'
      // }),

    },
    data(){
        return{

        }
    },
    methods:{
      // ...mapActions(['updateCountAsync']),
      // // ...mapMutations(['updateCount'])
      // ...mapMutations(['updateCount'])
      notify(){
         this.$notify({
        content:'test $notify',
        btn:'close'
      })
      }
    }

}
</script>

<style lang="stylus" scoped>
#app{
  position absolute
  left 0
  right 0
  top 0
  bottom 0
}
#cover{
  position absolute
  left 0
  top 0
  right 0
  bottom 0
  background-color #1A237E
  opacity .3
  z-index -1
}
</style>
