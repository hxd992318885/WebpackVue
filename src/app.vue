<template>
    <div id="app">
   <div class="cover">
   <Header></Header>
   <TODO></TODO>
   <Footer></Footer>


   </div>

    </div>
</template>

<script>
import Header from './todo/header.vue'
import TODO from './todo/todo.vue'
import Footer from './todo/footer.jsx'
export default {
      components:{
        Header,
        TODO,
        Footer
      }
}
</script>

<style lang="stylus" scoped>
  #app{
position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;

  }  

#cover {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: #999;
    opacity: 0.9;
    z-index: -1;
}
</style>

