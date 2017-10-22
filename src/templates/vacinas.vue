<template>
  <div class="w3-margin">
    <div class="w3-display-middle w3-text-blue w3-card-4 w3-white w3-padding w3-round w3-center" style="z-index:1" v-show="load">
      <i class="fa fa-spinner fa-pulse fa-3x"></i>
      <small>Carregando..</small>
    </div>

    <div class="w3-border-bottom">
      Consultar Vacinas
    </div>
    <div class="w3-card-2 w3-white w3-text-blue w3-margin-top w3-padding-16">
      <div class="w3-container w3-cell-row w3-center">
        <div class="w3-cell" style="width:33%">
          <a @click="tomadasAction">
            <button class="w3-button w3-green w3-round w3-hover-green"><i class="fa fa-check"></i></button><br>
            <small>Tomadas</small>
          </a>
        </div>
        <div class="w3-cell" style="width:33%">
          <a @click="proximasAction">
            <button class="w3-button w3-blue w3-text-white w3-round w3-hover-blue"><i class="fa fa-arrow-circle-right"></i></button><br>
            <small>Próximas</small>
          </a>
        </div>
        <div class="w3-cell" style="width:33%">
          <a @click="atrasosAction">
            <button class="w3-button w3-orange w3-text-white w3-round w3-hover-orange"><i class="fa fa-undo"></i></button><br>
            <small>Atrasadas</small>
          </a>
        </div>
      </div>
    </div>

    <div v-show="atrasos">
      <div class="w3-card-2 w3-margin-top w3-orange w3-text-white">
        <div class="w3-btn w3-block w3-cell-row" @click="atrasosAction">
          <div class="w3-cell">
            Vacinas em atraso  
          </div>
          <div class="w3-cell">
            <i class="fa fa-times"></i>
          </div>
        </div>
      </div>
      <div class="w3-card w3-white" style="padding-bottom:3%">
        <div class="w3-table w3-small w3-bordered">
          <thead class="w3-orange w3-text-white">
            <th>Descrição</th>
            <th>Dose</th>
          </thead>
          <tr v-for="vacinaLate in vacinasAtrasadas">
            <td>{{vacinaLate.name}}</td>
            <td>{{vacinaLate.dose == 'U' ? 'Dose única' : vacinalate.dose + 'º Dose'}}</td>
          </tr>
        </div>
      </div>
    </div>
    <!--Proximas Vacinas-->
    <div v-show="proximas">
      <div class="w3-card-2 w3-blue w3-margin-top">
        <div class="w3-btn w3-block w3-cell-row" @click="proximasAction">
          <div class="w3-cell">
            Próximas Vacinas
          </div>
          <div class="w3-cell">
            <i class="fa fa-times"></i>
          </div>
        </div>
      </div>
      <div class="w3-card w3-white" style="padding-bottom:3%">
        <div class="w3-table w3-small w3-bordered">
          <thead class="w3-blue">
            <th>Descrição</th>
            <th>Dose</th>
          </thead>
          <tr v-for="vacinaComing in vacinasProximas">
            <td>{{vacinaComing.name}}</td>
            <td>{{vacinaComing.dose == 'U' ? 'Dose única' : vacinaComing.dose + 'º Dose'}}</td>
          </tr>
        </div>
      </div>
    </div>

    <!--Vacinas Tomadas-->
    <div v-show="tomadas">
      <div class="w3-card-2 w3-green w3-margin-top">
        <div class="w3-btn w3-block w3-cell-row" @click="tomadasAction">
          <div class="w3-cell">
            Vacinas Tomadas
          </div>
          <div class="w3-cell">
            <i class="fa fa-times"></i>
          </div>
        </div>
      </div>
      <div class="w3-card w3-white" style="padding-bottom:3%">
        <div class="w3-table w3-small w3-bordered">
          <thead class="w3-green">
            <th>Data</th>
            <th>Descrição</th>
          </thead>
          <tr v-for="vacinaOk in vacinasTomadas">
            <td>{{vacinaOk.date}}</td>
            <td>{{vacinaOk.name}} {{vacinaOk.dose}}º Dose</td>
          </tr>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
    name: 'vacinas',
    data () {
      return {
        load: true,
        user: '',
        proximas: false,
        tomadas: true,
        atrasos: false,
        vacinasTomadas: [],
        vacinasAtrasadas: [],
        vacinasProximas: []
      }
    },
    methods: {
      initialize() {
        if ((localStorage.getItem('id_user') == null)) {
          window.location.href = '#/'
        }
        else{
          this.user = localStorage.getItem('id_user');
          
          //Vacinas Tommadas
          this.$http.get('http://10.0.1.244:3000/users/vacine/ok/'+ this.user).then(response => {
            this.vacinasTomadas = response.data;
            
            //Vacinas Proximas
            this.$http.get('http://10.0.1.244:3000/users/vacine/coming/'+ this.user).then(response => {
              
              //Vacinas Atrasadas
              this.$http.get('http://10.0.1.244:3000/users/vacine/late/'+ this.user).then(response => {
                this.vacinasAtrasadas = response.data;
                this.load = false;

              //Erro nas atradas
              }, response => {
                this.load = false;
                alert('Erro ao solicitar Atrasadas');
              });    
            
            this.vacinasProximas = response.data;
            
            //Erro nas Proximas
            }, response => {
              this.load = false;
              alert('Erro ao solicitar Proximas');
            });

          //Erro nas proximas
          }, response => {
            this.load = false;
            alert('Erro ao solicitar Tomadas');
          });

        }
      },
      atrasosAction() {
        console.log('teste');
        this.atrasos = !this.atrasos;
        this.tomadas = false;
        this.proximas = false;
      },
      tomadasAction() {
        this.tomadas = !this.tomadas;
        this.atrasos = false;
        this.proximas = false;
      },
      proximasAction() {
        this.proximas = !this.proximas;
        this.tomadas = false;
        this.atrasos = false;
      },
    },
    created: function(){
      this.initialize();
    }
}
</script>

<style scoped>
  
</style>