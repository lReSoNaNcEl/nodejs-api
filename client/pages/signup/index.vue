<template>
    <div class="wrapper">
        <div class="form-layout">
            <form class="form" action="#">
                <h1 class="form__title">Sign Up</h1>
                <div class="form__field">
                    <input type="text" v-model="email" class="field__input" placeholder="Email"/>
                    <label class="field__label">Email</label>
                </div>
                <div class="form__field">
                    <input type="password" v-model="password" class="field__input" placeholder="Password"/>
                    <label class="field__label">Password</label>
                </div>
                <button class="form__btn" type="button">Sign Up</button>
                <nuxt-link to="/login">Return to Log In</nuxt-link>
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
