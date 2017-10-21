<template>
  <div id="app">
    <hagload></hagload>
    <hagheader></hagheader>
    <hagsidemunu></hagsidemunu>
    <div style="margin-top: 25%"></div>
    <router-view></router-view>
    <hagfooter></hagfooter>
  </div>
</template>

<script>
import hagheader from './components/header.vue'
import hagsidemunu from './components/menu.vue'
import hagfooter from './components/footer.vue'
import hagload from './components/load.vue'


export default {
    name: 'app',
    components: { hagheader, hagsidemunu, hagfooter, hagload},
    data () {
      return {
        
      }
    },
    methods: {
      
    }
}
</script>

<style>
  a {
    text-decoration: none;
  }
</style>
