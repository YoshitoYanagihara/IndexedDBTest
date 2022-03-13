<template>
  <div id="app">
    <UserTable :list="userList" />
    <AddUserForm @input="addUser" />
  </div>
</template>

<script>
import userStore from './modules/UserStore';
import UserTable from './components/UserTable.vue';
import AddUserForm from './components/AddUserForm.vue';

export default {
  name: 'App',
  components: {
    UserTable,
    AddUserForm,
  },
  data: function () {
    return {
      userList: [],
    }
  },
  mounted: async function () {
    await this.updateUserList();
  },
  methods: {
    /**
     * ユーザリスト更新
     */
    async updateUserList() {
      try {
        this.userList = await userStore.getAll();
      } catch (error) {
        console.error(error);
      }
    },
    /**
     * ユーザ追加
     */
    async addUser(name) {
      try {
        await userStore.insert(name);
        alert("追加しました");
        this.updateUserList();
      } catch (error) {
        console.error(error);
      }
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
