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
}
</script>
