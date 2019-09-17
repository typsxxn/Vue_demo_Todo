<script>
export default {
  name:'Tab',
  props:{
    index:{
      required:true,
      type:[Number,String]
    },
    label: {
      type:String,
      default:'tab'
    }
  },
  computed:{
    active () {
      return this.$parent.value===this.index
    }
  },
  render () {
    const tab = this.$slots.label || <span>{this.label}</span>
    const classNames={
      tab:true,
      active:this.active
    }
    return(
      <li class={classNames} on-click={this.handleClick}>
        {tab}
      </li>
    )
  },
  methods:{
    handleClick(){
      this.$parent.onChange(this.index)
    }
  }
}
</script>

<style lang="stylus" scoped>
.tab
  list-style none
  line-height 40px
  margin-right 30px
  position relative
  bottom -2px
  cursor pointer
  &.active
    border-bottom 2px solid rgba(73, 50, 181,1)
    color rgba(27, 9, 109 ,1)
  &:last-child
    margin-right 0
</style>

