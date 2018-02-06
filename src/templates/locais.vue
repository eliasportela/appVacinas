<template>
  <div class="w3-margin">
    <div class="w3-border-bottom">
      Locais de Vacinação
    </div>
    <div class="w3-display-middle w3-text-blue w3-card-4 w3-white w3-padding w3-round w3-center" style="z-index:1" v-show="load">
      <i class="fa fa-spinner fa-pulse fa-3x"></i><br>
      <small>Carregando..</small>
    </div>
    <div class="w3-display-middle w3-text-blue w3-card-4 w3-white w3-padding w3-round w3-center" style="z-index:1; width:80%" v-show="erro">
      <i class="fa fa-times fa-3x w3-text-red"></i><br>
      <small>Ops. Parece que houve algum erro. Por favor tente novamente</small>
      <button class="w3-button w3-block w3-small w3-blue w3-margin-top w3-hover-blue" onclick="location.reload()">Recarregar página</button>
    </div>
    <div class="w3-display-middle w3-text-blue w3-card-4 w3-white w3-padding w3-round w3-center" style="z-index:1; width:80%" v-show="erro">
      <i class="fa fa-times fa-3x w3-text-red"></i><br>
      <small>Ops.Parece que houve Algum erro. Por favor tente novamente</small>
      <button class="w3-button w3-block w3-small w3-blue w3-margin-top w3-hover-blue" onclick="location.reload()">Recarregar página</button>
    </div>
    <div class="w3-card w3-margin-top" style="padding-bottom:15px">
      <div v-for="obj in ubs" class="w3-small">
        <div class="w3-bar w3-padding-small w3-center">{{obj.nome}}</div>
        <div class="w3-bar w3-white w3-padding w3-border-bottom" >
          {{obj.endereco}} - {{obj.numero}}<br>
          CEP: {{obj.cep}} - (16) {{obj.telefone}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'locais',
    data () {
      return {
        load: true,
        erro: false,
        user: '',
        ubs: []
      }
    },
    methods: {
      initialize(){
        if ((localStorage.getItem('id_user') == null)) {
          window.location.href = '#/'
        }else{
          this.$http.get('http://localhost:3000/outposts').then(response => {
            this.ubs = response.data;
            this.load = false;
          //Erro nas atradas
          }, response => {
            this.load = false;
            this.erro = true;
          });
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
