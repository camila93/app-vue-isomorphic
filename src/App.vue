<template>
  <div id="app">
    <!-- CSR - Lista renderizada no client após o DOM ser montado. -->
    <h1>Frutas Vermelhas</h1>
    <ul v-for="fruta in redFruits" :key="fruta">
      <li>{{ fruta }}</li>
    </ul>
    <!-- SSR - Lista renderizada com dados assíncronos vindos do contexto do node.js/express.js; -->
    <h1>Frutas Verdes</h1>
    <ul v-for="fruta in greenFruits" :key="fruta">
      <li>{{ fruta }}</li>
    </ul>
    <!-- CSR - Lista renderizada com dados assíncronos após o DOM ser montado. -->
    <h1>Frutas Amarelas</h1>
    <ul v-for="fruta in yellowFruits" :key="fruta">
      <li>{{ fruta }}</li>
    </ul>
    <!-- SSR - Lista renderizada com dados assíncronos requisitados dentro do componente utilizando VUEX. -->
    <h1>Frutas Laranjas</h1>
    <ul v-for="fruta in $store.state.orangeFruits" :key="fruta">
      <li>{{ fruta }}</li>
    </ul>
    <!-- SSR - Lista renderizada com dados assíncronos vindos do contexto do node.js/express.js armazenados no VUEX. -->
    <h1>Frutas Roxas</h1>
    <ul v-for="fruta in $store.state.purpleFruits" :key="fruta">
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
        redFruits: [],
        greenFruits: [],
        orangeFruits: [],
        purpleFruits: []
      }
    },
    // Método executado somente no client.
    mounted() {
      this.redFruits = ['Morango', 'Maçã', 'Amora']

      axios.get('http://www.mocky.io/v2/5ce49e223100004fb4742d80')
        .then(response => {
          this.yellowFruits = response.data.yellowFruits
        })
    },
    // Método executado no server e client.
    created() {
      this.greenFruits = this.$store.state.greenFruits
    },
    // Método executado somente no server.
    async serverPrefetch() {
      await axios.get('http://www.mocky.io/v2/5ce4a0db3100000bb6742d85')
        .then(response => {
          this.$store.commit('setOrangeFruits', response.data.orangeFruits)
        })
    }
  }
</script>