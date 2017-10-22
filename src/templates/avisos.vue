<template>
  <div class="w3-margin">
    <div class="w3-border-bottom">
      Avisos de Vacinação
    </div>
    <div class="w3-card-4 w3-margin-top w3-padding w3-orange w3-text-white">
      <div class="w3-bar w3-center w3-padding-small w3-border-bottom">Lei 4234234 de 2011</div>
      <div class="w3-bar w3-padding-small">
        Atenção, pessoas acima de 19 anos são obrigadas tomar polivalente 2 vezes  
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'avisos',
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