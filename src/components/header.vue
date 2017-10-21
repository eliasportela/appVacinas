<template>
  <div>
    <div class="w3-overlay w3-hide-large w3-animate-opacity" onclick="w3_close()" style="cursor:pointer" title="Close Sidemenu" id="myOverlay"></div>
    <div class="w3-top w3-blue w3-padding w3-display-top">
      <div class="w3-center">
        Carteira de Vacinação
      </div>
      <div class="w3-display-topleft w3-text-white" style="z-index:1">
      <button class="w3-btn">
        <i class="fa fa-bars" onclick="w3_open()"></i>
      </button>
    </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'app',
    data () {
      return {
        
      }
    },
    methods: {

    }
}
</script>

<style scoped>
  
</style>