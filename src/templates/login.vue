<template>
  <div class="w3-margin">
    <div class="w3-display-middle w3-card-2 w3-white w3-padding" style="width:80%;">
        <h4 class="w3-center w3-opacity">Login</h4>
        <br>
        <label class="w3-cell-row">
          <div class="w3-cell" style="width:10%">
            <i class="fa fa-user"></i>
          </div>
          <div class="w3-cell">
            <input type="number" class="w3-input" name="nome" id="nome" placeholder="Cartão do SUS" v-model="sus">
          </div>
        </label>
        <br>
        <label class="w3-cell-row">
          <div class="w3-cell" style="width:10%">
            <i class="fa fa-envelope-o"></i>
          </div>
          <div class="w3-cell">
            <input type="date" class="w3-input" name="email" id="email" placeholder="E-mail" v-model="data">
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
        sus: '',
        data: '',
        resource: this.$resource('https://listaccb.com/adm/app/regioes'),
        user: '',
      }
    },
    methods: {
      initialize () {
        this.resource.get({}).then((response) => {
          this.user = response.data;
          console.log(this.user);
        })
      },
      logar(){
        if ((this.sus == '') || (this.data == '')) {
          alert('Não Logado');
          return ''
        }else{
          localStorage.setItem('cartao_sus', this.sus);
          localStorage.setItem('data_nascimento', this.data);
          alert('Logado');
        }
      }
    },

    created: function () {
      //this.initialize();
    }
}
</script>

<style scoped>
    i {
      color: #2196F3
    }
</style>