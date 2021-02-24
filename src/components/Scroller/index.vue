<template>
 <div class="wrapper" ref="wrapper">
     <slot></slot>
 </div>
</template>

<script>
import BScroll from 'better-scroll'
 export default {
  name: 'Scroller',
  data () {
   return {

   }
  },
  mounted(){
      this.$nextTick(()=>{
          var bscroll=	new BScroll(this.$refs.wrapper,{
					tap:true,
					probeTybe:1,

				});
      })
  }
  
 }
</script>

<style scoped>
.wrapper{
    height: 100%;
}
 
</style>
