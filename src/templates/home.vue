<template>
  <div>
    <div class="w3-display-middle w3-text-blue w3-card-4 w3-white w3-padding w3-round w3-center" style="z-index:1" v-show="load">
      <i class="fa fa-spinner fa-pulse fa-3x"></i>
      <small>Carregando..</small>
    </div>
    <div class="w3-display-middle w3-text-blue w3-card-4 w3-white w3-padding w3-round w3-center" style="z-index:1; width:80%" v-show="erro">
      <i class="fa fa-times fa-3x w3-text-red"></i><br>
      <small>Ops.Parece que houve Algum erro. Por favor tente novamente</small>
      <button class="w3-button w3-block w3-small w3-blue w3-margin-top w3-hover-blue" onclick="location.reload()">Recarregar Página</button>
    </div>
    <div class="w3-margin">
      <div class="w3-card-2 w3-white w3-text-blue">
        <div class="w3-padding-16">
          <div class="w3-padding">
            <span class="w3-large">{{user.nome}}</span><br>
            <small>Nascimento: {{user.aniversario}}</small>
            <hr>
          </div>
          <div class="w3-container w3-cell-row w3-center">
            <div class="w3-cell" style="width:33%">
              <a href="#/campanhas">
                <button class="w3-button w3-blue w3-round"><i class="fa fa-calendar"></i></button><br>
                <small>Campanhas</small>
              </a>
            </div>
            <div class="w3-cell" style="width:33%">
              <a href="#/vacinas">
                <button class="w3-button w3-green w3-text-white w3-round"><i class="fa fa-plus-square"></i></button><br>
                <small>Vacinas</small>
              </a>
            </div>
            <div class="w3-cell" style="width:33%">
              <a href="#/avisos">
                <button class="w3-button w3-orange w3-text-white w3-round"><i class="fa fa-bell-o"></i></button><br>
                <small>Avisos</small>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="w3-margin-top w3-border-bottom">
        Notificações
      </div>
      <div class="w3-card-2 w3-padding w3-padding-16 w3-margin-top w3-red">
        <h6>Atenção!</h6> Sua Carteira de Vacinação pode estar desatualizada. Atualize ela levando ao posto de saúde mais proximo
      </div>
      <div class="w3-card-2 w3-margin-top w3-white w3-text-orange w3-text-white" v-show="atrasadas">
        <div class="w3-padding w3-padding-16">
          Há <b>{{atrasadas}}</b> vacinas em atraso.
          <a href="#/vacinas" class="w3-btn w3-tiny w3-margin-top w3-block w3-orange w3-text-white w3-round">Clique aqui para verificar</a>
        </div>
      </div>
      <div class="w3-margin-top w3-border-bottom">
        Campanhas
      </div>
      <div class="w3-card-2 w3-white w3-padding w3-padding-16 w3-margin-top w3-text-green w3-display-container">
        Campanha contra a Gripe
        <a href="#/campanhas" class="w3-btn w3-tiny w3-margin-top w3-block w3-green w3-text-white w3-round">Acessar Campanhas</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'home',
    data () {
      return {
        atrasadas: '',
        erro: false,
        load: true,
        dados: '',
        user: {
          nome: '',
          aniversario: '',
          id_user: ''
        },
      }
    },
    methods: {
      verificarLogin(){
        if (localStorage.getItem('id_user') == null) {
          window.location.href = '#/'
        }else{
          this.user.id_user = localStorage.getItem('id_user');
          this.user.nome = localStorage.getItem('nome_user');
          this.user.aniversario = localStorage.getItem('nascimento_user');
          this.load = false;

          this.$http.get('http://10.0.1.244:3000/users/vacine/late/'+ this.user.id_user).then(response => {
            this.atrasadas = response.data.length;
            this.load = false;
            if (this.atrasadas < 1) {
              this.atrasadas = false;
            }
          //Erro nas atradas
          }, response => {
            this.load = false;
            this.erro = true;
          });
        }
      }
    },
    created: function () {
      this.verificarLogin();
    }
}
</script>

<style scoped>
  
</style>