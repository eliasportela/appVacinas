<template>
  <div>
    <nav class="w3-top w3-sidebar w3-bar-block w3-collapse w3-blue w3-animate-left w3-card-2" style="z-index:3;width:70%;" id="mySidebar">
      <a href="javascript:void(0)" class="w3-bar w3-button w3-border-bottom w3-white" onclick="w3_close()"><i class="fa fa-bars w3-margin-right"></i> Menu</a>
      <a href="#/home" class="w3-bar w3-button w3-button w3-border-bottom" onclick="w3_close()"><i class="fa fa-home w3-margin-right"></i> Inicio</a>
      <a href="#/vacinas" class="w3-bar w3-button w3-border-bottom" onclick="w3_close()"><i class="fa fa-plus-square w3-margin-right"></i> Vacinas</a>
      <a href="#/campanhas" class="w3-bar w3-button w3-border-bottom" onclick="w3_close()"><i class="fa fa-calendar w3-margin-right"></i> Campanhas</a>
      <a href="#/locais" class="w3-bar w3-button w3-border-bottom" onclick="w3_close()"><i class="fa fa-map-signs w3-margin-right"></i> Locais</a>
      <a href="#/avisos" class="w3-bar w3-button w3-border-bottom" onclick="w3_close()"><i class="fa fa-bell-o w3-margin-right"></i> Avisos</a>
      <a href="#/sobre" class="w3-bar w3-button w3-border-bottom" onclick="w3_close()"><i class="fa fa-info-circle w3-margin-right"></i> Sobre</a>
      <a href="#/" class="w3-bar w3-button" onclick="w3_close()"><i class="fa fa-sign-out w3-margin-right"></i>Sair</a>
    </nav>
    <div class="w3-overlay w3-hide-large w3-animate-opacity" onclick="w3_close()" style="cursor:pointer" title="Close Sidemenu" id="myOverlay"></div>
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

  .w3-bar {
    text-align: left;
  }
  
</style>