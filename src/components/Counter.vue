<template>
  <div id="app">
    <p> {{ counter }} </p>
    <button @click="increase(1)">+1</button>
    <button @click="decrease(1)">-1</button>
    <button @click="increase(10)">+10</button>
    <button @click="decrease(10)">-10</button>
  </div>
</template>

<script>

export default {
  name: 'Counter',
  computed: {
    counter() {
      return this.$store.state.counter
    }
  },
  methods: {
    increase(antal) {
      this.$store.commit('inc', antal)
    },
    decrease(antal) {
      this.$store.commit('dec', antal)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
