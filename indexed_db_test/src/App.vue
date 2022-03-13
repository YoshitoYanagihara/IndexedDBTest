<template>
  <div id="app">
    <AddUserForm @input="addUser" />
  </div>
</template>

<script>
import userStore from './modules/UserStore';
import AddUserForm from './components/AddUserForm.vue';

export default {
  name: 'App',
  components: {
    AddUserForm,
  },
  mounted: async function () {
    try {
      const list = await userStore.getAll();
      console.log(list);
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    /**
     * ユーザ追加
     */
    addUser(name) {
      alert(name);
    },
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
