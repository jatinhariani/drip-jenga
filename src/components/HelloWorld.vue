<template>
  <div class="hello">
    <h1 class="white--text text-xs-center">Drip Jenga Scores</h1>
    <v-data-table
      :headers="headers"
      :items="players"
      hide-actions
      class="elevation-1 white"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.name }}</td>
        <td>{{ props.item.score }}</td>
      </template>
    </v-data-table>
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      headers: [{
        text: 'Player Name',
        value: 'name'
      }, {
        text: 'Losses',
        value: 'losses'
      }],
      players: []
    }
  },
  mounted () {
    this.$http('/')
      .then((res) => {
        this.players = res.data.players
      })
  }
}
</script>
<style scoped>
h1 {
  margin-bottom: 40px;
}
.hello {
  padding-top: 40px;
  max-width: 400px;
  margin: 0 auto;
}
</style>
