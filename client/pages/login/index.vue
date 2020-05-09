<template>
    <div class="wrapper">
        <div class="form-layout">
            <form class="form" action="#">
                <h1 class="form__title">Login</h1>
                <input v-model="email" class="form__field" type="text" placeholder="Email:"/>
                <input v-model="password" class="form__field" type="password" placeholder="Password:"/>
                <button @click="getAuthToken" class="form__btn" type="button">Log In</button>
                <nuxt-link to="/signup">Haven't yet account? Sign Up!</nuxt-link>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: null,
            password: null,
        }
    },
    created() {
        if (localStorage['token'])
            this.$router.push('/')
    },
    methods: {
        getAuthToken() {
            this.$store.dispatch('token/saveToken', {
                email: this.email,
                password: this.password
            }).then(() => {
                if (localStorage['token'])
                    this.$router.push('/')
            })
        }
    },
}
</script>
