<template>
  <div id="app">
  </div>
</template>

<script>
import userStore from './modules/UserStore';

export default {
  name: 'App',
  components: {
  },
  mounted: async function () {
    try {
      const list = await userStore.getAll();
      console.log(list);
    } catch (error) {
      console.error(error);
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
