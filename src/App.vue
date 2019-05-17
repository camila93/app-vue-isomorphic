<template>
  <div id="app">
    <!-- Lista renderizada renderizada no server e remontada após o hydrate -->
    <h1>Frutas Amarelas</h1>
    <ul v-for="fruta in frutasAmarelas" :key="fruta">
      <li>{{ fruta }}</li>
    </ul>
    <hr />
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
        frutasAmarelas: [],
        frutasVermelhas: [],
        greenFruits: []
      }
    },
    // Client render
    mounted() {
      // Alimentando parte do state do componente
      // com um state global (Poderia ser algo mais elaborado com Vuex)
      this.greenFruits = __INITIAL_STATE__.greenFruits
      this.frutasVermelhas = ['Morango', 'Maçã', 'Amora']
    },
    // Pré-renderiza (Server render) e faz o hydrate no Client Side
    created() {
      this.frutasAmarelas = ['Banana', 'Abacaxi', 'Mamão']
    },
    // Hook executado apenas no Server Side
    // Pode ser utilizado para execução assíncrona
    // dentro de um componente específico
    // ou para realizar pré-render
    serverPrefetch() {
      // Definindo state do componente a partir
      // de dados vindo do contexto do node
      this.greenFruits = this.$ssrContext.greenFruits
    }
  }
</script>