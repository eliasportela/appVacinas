<template>
  <div class="w3-margin">
    <div class="w3-border-bottom">
      Consultar Vacinas
    </div>
    <div class="w3-card-2 w3-margin-top w3-red">
      <div class="w3-btn w3-block w3-cell-row" @click="atrasosAction">
        <div class="w3-cell">
          Vacinas em atraso  
        </div>
        <div class="w3-cell">
          <i class="fa fa-chevron-down"></i>
        </div>
      </div>
    </div>
    <div class="w3-card w3-red" style="padding-bottom:3%" v-show="atrasos">
      <div class="w3-btn w3-block w3-cell-row">
        <div class="w3-cell w3-left-align" style="width:90%">
          Anti-Tétano 3º Dose
        </div>
        <div class="w3-cell" style="width:10%">
          <i class="fa fa-info-circle"></i>
        </div>
      </div>
      <div class="w3-btn w3-block w3-cell-row">
        <div class="w3-cell w3-left-align" style="width:90%">
          Anti-Tétano 3º Dose
        </div>
        <div class="w3-cell" style="width:10%">
          <i class="fa fa-info-circle"></i>
        </div>
      </div>
    </div>
    
    <div class="w3-card-2 w3-blue w3-margin-top">
      <div class="w3-btn w3-block w3-cell-row" @click="proximasAction">
        <div class="w3-cell">
          Próximas Vacinas
        </div>
        <div class="w3-cell">
          <i class="fa fa-chevron-down"></i>
        </div>
      </div>
    </div>
    <div class="w3-card w3-blue" style="padding-bottom:3%" v-show="proximas">
      <div class="w3-btn w3-block w3-cell-row">
        <div class="w3-cell w3-left-align" style="width:90%">
          Anti-Tétano 3º Dose
        </div>
        <div class="w3-cell" style="width:10%">
          <i class="fa fa-info-circle"></i>
        </div>
      </div>
      <div class="w3-btn w3-block w3-cell-row">
        <div class="w3-cell w3-left-align" style="width:90%">
          Anti-Tétano 3º Dose
        </div>
        <div class="w3-cell" style="width:10%">
          <i class="fa fa-info-circle"></i>
        </div>
      </div>
    </div>

    <div class="w3-card-2 w3-green w3-margin-top">
      <div class="w3-btn w3-block w3-cell-row" @click="tomadasAction">
        <div class="w3-cell">
          Vacinas Tomadas
        </div>
        <div class="w3-cell">
          <i class="fa fa-chevron-down"></i>
        </div>
      </div>
    </div>
    <div class="w3-card w3-green" style="padding-bottom:3%" v-show="tomadas">
      <div class="w3-btn w3-block w3-cell-row">
        <div class="w3-cell w3-left-align" style="width:90%">
          Anti-Tétano 3º Dose
        </div>
        <div class="w3-cell" style="width:10%">
          <i class="fa fa-info-circle"></i>
        </div>
      </div>
      <div class="w3-btn w3-block w3-cell-row">
        <div class="w3-cell w3-left-align" style="width:90%">
          Anti-Tétano 3º Dose
        </div>
        <div class="w3-cell" style="width:10%">
          <i class="fa fa-info-circle"></i>
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
        proximas: false,
        tomadas: false,
        atrasos: false,
      }
    },
    methods: {
      atrasosAction() {
        console.log('teste');
        this.atrasos = !this.atrasos;
      },
      tomadasAction() {
        this.tomadas = !this.tomadas;
      },
      proximasAction() {
        this.proximas = !this.proximas;
      },
    }
}
</script>

<style scoped>
  
</style>