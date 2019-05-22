<template>
  <div id="app">
    <!-- Lista renderizada no client após o DOM ser montado -->
    <h1>Frutas Vermelhas</h1>
    <ul v-for="fruta in frutasVermelhas" :key="fruta">
      <li>{{ fruta }}</li>
    </ul>
    <!-- Lista renderizada a partir de dados do contexto do node.js -->
    <h1>Frutas Verdes</h1>
    <ul v-for="fruta in greenFruits" :key="fruta">
      <li>{{ fruta }}</li>
    </ul>
    <h1>Frutas Amarelas</h1>
    <ul v-for="fruta in yellowFruits" :key="fruta">
      <li>{{ fruta }}</li>
    </ul>
    <h1>Frutas Laranjas</h1>
    <ul v-for="fruta in $store.state.orangeFruits" :key="fruta">
      <li>{{ fruta }}</li>
    </ul>
    <h1>Frutas Roxas</h1>
    <ul v-for="fruta in purpleFruits" :key="fruta">
      <li>{{ fruta }}</li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        yellowFruits: [],
        frutasVermelhas: [],
        greenFruits: [],
        orangeFruits: [],
        purpleFruits: []
      }
    },
    mounted() {
      this.frutasVermelhas = ['Morango', 'Maçã', 'Amora']

      axios.get('http://www.mocky.io/v2/5ce49e223100004fb4742d80')
        .then(response => {
          this.yellowFruits = response.data.yellowFruits
        })
    },
    created() {
      this.greenFruits = this.$store.state.greenFruits
      this.purpleFruits = this.$store.state.purpleFruits
    },
    async serverPrefetch() {
      await axios.get('http://www.mocky.io/v2/5ce4a0db3100000bb6742d85')
        .then(response => {
          this.$store.commit('setOrangeFruits', response.data.orangeFruits)
        })
    }
  }
</script>