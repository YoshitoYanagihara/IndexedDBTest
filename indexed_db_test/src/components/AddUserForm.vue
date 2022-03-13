<template>
    <div class="add-user-form">
        <form action="#">
            <ValidationObserver ref="validate">
                <ValidationProvider rules="required">
                    <input type="text" v-model="userName" />
                </ValidationProvider>
            </ValidationObserver>
            <input type="submit" @click="onClick" value="追加" />
        </form>
    </div>
</template>

<script>
export default {
    name: "AddUserForm",
    data: function () {
        return {
            userName: "",
        }
    },
    methods: {
        onClick() {
            this.$refs.validate.validate().then(result => {
                if (!result) { return; }
                this.$emit('input', this.userName);
                this.userName = "";
            });
        },
    }
}
</script>
