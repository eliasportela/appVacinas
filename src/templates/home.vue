<template>
  <div>
    <div class="w3-margin">
      <div class="w3-card-2 w3-margin-top w3-white w3-text-blue">
        <div class="w3-padding-16">
          <div class="w3-padding">
            <span class="w3-large">Elias Portela</span><br>
            <small>24 anos</small>
            <hr>
          </div>
          <div class="w3-container w3-cell-row w3-center">
            <div class="w3-cell" style="width:33%">
              <a href="#/campanhas">
                <button class="w3-button w3-green w3-round"><i class="fa fa-calendar"></i></button><br>
                <small>Campanhas</small>
              </a>
            </div>
            <div class="w3-cell" style="width:33%">
              <a href="#/locais">
                <button class="w3-button w3-red w3-text-white w3-round"><i class="fa fa-map-signs"></i></button><br>
                <small>Locais</small>
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
      <div class="w3-card-2 w3-margin-top w3-white w3-text-orange w3-text-white">
        <div class="w3-padding w3-padding-16">
          Há <b>3</b> vacinas em atraso.
          <a href="#" class="w3-btn w3-tiny w3-margin-top w3-block w3-orange w3-text-white w3-round">Clique aqui para verificar</a>
        </div>
      </div>
      <div class="w3-margin-top w3-border-bottom">
        Campanhas
      </div>
      <div class="w3-card-2 w3-white w3-padding w3-padding-16 w3-margin-top w3-text-green w3-display-container">
        Campanha contra a Gripe
        <a href="#" class="w3-btn w3-tiny w3-margin-top w3-block w3-green w3-text-white w3-round">Acessar Campanhas</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'home',
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