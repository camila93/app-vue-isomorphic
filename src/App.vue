<template>
  <div id="app">
    <!-- Lista renderizada no client após o DOM ser montado -->
    <h1>Frutas Vermelhas</h1>
    <ul v-for="fruta in frutasVermelhas" :key="fruta">
      <li>{{ fruta }}</li>
    </ul>
    <hr />
    <!-- Lista renderizada a partir de dados do contexto do node.js -->
    <h1>Frutas Verdes</h1>
    <ul v-for="fruta in greenFruits" :key="fruta">
      <li>{{ fruta }}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        frutasVermelhas: [],
        greenFruits: []
      }
    },
    // Client render
    mounted() {
      // Alimentando parte do state do componente
      // com um state global (Poderia ser algo mais elaborado com Vuex)
      this.frutasVermelhas = ['Morango', 'Maçã', 'Amora']
    },
    // Pré-renderiza (Server render) e faz o hydrate no Client Side
    created() {
      this.greenFruits = this.$store.state.greenFruits
    }
  }
</script>