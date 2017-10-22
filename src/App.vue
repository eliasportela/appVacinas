<template>
  <div id="app">
    <hagheader></hagheader>
    <hagsidemunu></hagsidemunu>
    <div style="margin-top: 18%"></div>
    <router-view></router-view>
    <hagfooter></hagfooter>
  </div>
</template>
<script>

import hagheader from './components/header.vue'
import hagsidemunu from './components/menu.vue'
import hagfooter from './components/footer.vue'


export default {
    name: 'app',
    components: { hagheader, hagsidemunu, hagfooter},
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
