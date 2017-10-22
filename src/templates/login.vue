<template>
  <div class="w3-margin">
    <div class="w3-display-middle w3-text-blue w3-card-4 w3-white w3-padding w3-round w3-center" style="z-index:1" v-show="load">
      <i class="fa fa-spinner fa-pulse fa-3x"></i>
      <small>Carregando..</small>
    </div>
    <div class="w3-display-middle w3-card-2 w3-white w3-padding w3-margin-top" style="width:80%;">
        <h4 class="w3-center w3-opacity">Login</h4>
        <br>
        <label class="w3-cell-row">
          <div class="w3-cell" style="width:10%">
            <i class="fa fa-user"></i>
          </div>
          <div class="w3-cell">
            <input type="number" class="w3-input" name="nome" id="nome" placeholder="Cartão do SUS" v-model="dadosRegister.susCard">
          </div>
        </label>
        <br>
        <label class="w3-cell-row">
          <div class="w3-cell" style="width:10%">
            <i class="fa fa-envelope-o"></i>
          </div>
          <div class="w3-cell">
            <input type="date" class="w3-input" name="email" id="email" placeholder="E-mail" v-model="dadosRegister.birthDate">
          </div>
        </label>
        <div class="w3-margin-top w3-margin-bottom w3-center">
          <button class="w3-btn w3-round w3-blue w3-block" @click="logar">
            Acessar
          </button>
        </div>   
    </div>
  </div>  
</template>
<script>
export default {
    name: 'login',
    data () {
      return {
        load: false,
        dadosRegister: {
          susCard: '',
          birthDate: ''
        },
        resource: this.$resource('http://10.0.1.244:3000/login/'),
        user: '',
        dados: ''
      }
    },
    methods: {
      initialize(){
        if ((localStorage.getItem('id_user') != null)) {
          window.location.href = '#/home'
        }
      },

      //api de login
      consultaLogin() {
        
        this.$http.post('http://10.0.1.244:3000/login/',{susCard: this.dadosRegister.susCard, birthDate:this.dadosRegister.birthDate}).then(response => {
          //retorna os dados
          this.user = response.body;
          console.log(this.user.Matricula);
          //api de busca dos dados do usuario
          this.$http.get('http://10.0.1.244:3000/users/'+ this.user.Matricula).then(response => {
            // success callback
            this.dados = response.data;
            localStorage.setItem('id_user', this.user.Matricula);
            //dados do retorno da API
            localStorage.setItem('nome_user', this.dados.Nome);
            localStorage.setItem('nascimento_user', this.dados.Dt_Nasc);
            localStorage.setItem('sexo_user', this.dados.Sexo);
            localStorage.setItem('cep_user', this.dados.Cep);
            localStorage.setItem('sus_user', this.dados.Cartao_Sus);
            this.load = false;
            window.location.href = '#/home'
          
          }, response => {
            // error callback
            this.load = false;
            alert('Erro ao solicitar dados');
          });
          window.location.href = '#/home'
          }, response => {
            // error callback
            this.load = false;
            alert('Dados nao encontrado');
          });

      },

      logar(){
        if ((this.dadosRegister.susCard == '') || (this.dadosRegister.birthDate == '')) {
          alert('Preencha todos dados!');
          return ''
        }else{
          this.load = true;
          this.consultaLogin();
        }
      }
    },
    created: function () {
      this.initialize();
    }
}
</script>

<style scoped>
    i {
      color: #2196F3
    }
</style>