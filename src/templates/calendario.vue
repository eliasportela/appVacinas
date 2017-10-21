<template>
  <div class="">
    <div class="w3-padding-small w3-white" style="margin-top: -10%">
      <div class="w3-responsive">
        <table class="w3-table-all w3-small w3-card-4">
          <thead class="w3-gray">
            <th>1 Ano</th>
            <th>1 - 5 Anos</th>
            <th>6 - 12 Anos</th>
            <th>13 - 18 Anos</th>
            <th>19 - 60 Anos</th>
            <th>Acima de 61 Anos</th>
          </thead>
          <tbody>
            <tr>
              <td class="w3-green">
                <b>BCG</b><br>
                Dose 1/1
                Abril/2013
              </td>
              <td class="w3-green">
                <b>BCG</b><br>
                Dose 1/1
                Abril/2013
              </td>
              <td class="w3-red">
                <b>BCG</b><br>
                Dose 1/1
                Abril/2013
              </td>
              <td class="w3-red">
                <b>BCG</b><br>
                Dose 1/1
                Abril/2013
              </td>
              <td class="w3-green">
                <b>BCG</b><br>
                Dose 1/1
                Abril/2013
              </td>
              <td> - </td>
            </tr>
            <tr>
              <td> - </td>
              <td> - </td>
              <td> - </td>
              <td> - </td>
              <td> - </td>
              <td> - </td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'calendario',
    data () {
      return {
        
      }
    },
    methods: {
      
    }
}
</script>

<style scoped>
table {
  min-height: 88vh
}
 th {
   height: 20px;
   vertical-align: middle;
   text-align: center;
   font-size: 0.7em;
   border: 1px solid #ddd;
 }
 td{
    vertical-align: middle;
   text-align: center;
   font-size: 0.7em;
   border: 1px solid #ddd;

 }
  
</style>