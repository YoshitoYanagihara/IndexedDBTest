<template>
    <div class="user-table" align="center">
        <table border="1">
            <thead>
                <tr>
                    <th>ID</th><th>Name</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in list" :key="item.id">
                    <td>{{ item.id }}</td>
                    <td>{{ item.name }}</td>
                    <td><button @click="onClickDelete(item)">削除</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: "UserTable",
    props: {
        list: Array,
    },
    methods: {
        onClickDelete(item) {
            if (!confirm(item.name + "を削除しますか？")) { return; }
            this.$emit('delete', item.id);
        }
    },
}
</script>
