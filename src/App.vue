<template>
  <div>
    <h1>Frutas Amarelas</h1>
    <ul v-for="fruta in frutasAmarelas" :key="fruta">
      <li>{{ fruta }}</li>
    </ul>
    <hr />
    <h1>Frutas Vermelhas</h1>
    <ul v-for="fruta in frutasVermelhas" :key="fruta">
      <li>{{ fruta }}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        frutasAmarelas: ['Banana', 'Abacaxi', 'Mamão'],
        frutasVermelhas: []
      }
    },
    // Client render
    beforeMount() {
      this.frutasAmarelas = ['Banana', 'Abacaxi', 'Mamão']
    },
    // Server render
    beforeCreate() {
      this.frutasVermelhas = ['Morango', 'Maçã', 'Amora']
    }
  }
</script>