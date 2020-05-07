<template>
    <div class="wrapper">
        <div class="form-layout">
            <form class="form" action="#">
                <h1 class="form__title">Sign Up</h1>
                <input class="form__field" type="text" placeholder="Email:">
                <input class="form__field" type="password" placeholder="Password:">
                <button class="form__btn" type="button">Sign Up</button>
                <nuxt-link to="/login">Have already accont? Log in!</nuxt-link>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        created() {
            if (localStorage['token'])
                this.$router.push('/')
        },
        data() {
            return {
                email: null,
                password: null,
            }
        },
        methods: {
        }
    }
</script>
