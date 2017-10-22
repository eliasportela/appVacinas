<template>
  <div class="w3-margin">
    <div class="w3-border-bottom">
      Principais campanhas
    </div>
    <div class="w3-card-2 w3-padding w3-margin-top w3-green">
      <div class="w3-bar w3-center w3-padding-small w3-border-bottom">Campanha contra a Gripe!</div>
      <div class="w3-bar w3-padding-small">
        Vá ao posto mais proximo para participar <br>
        <small>De 16/10/2017 até 16/10/2017</small>
      </div>
    </div>
    <div class="w3-card-2 w3-padding w3-margin-top w3-green">
      <div class="w3-bar w3-center w3-padding-small w3-border-bottom">Febre Amarela!</div>
      <div class="w3-bar w3-padding-small">
        Vá ao posto mais proximo para participar <br>
        <small>De 16/10/2017 até 16/10/2017</small>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    name: 'campanhas',
    data () {
      return {
        
      }
    },
    methods: {
      initialize(){
        if ((localStorage.getItem('id_user') == null)) {
          window.location.href = '#/'
        }
      }
    },
    created: function () {
      this.initialize();
    }
}
</script>

<style scoped>
  
</style>