<template>
    <div class="wrapper">
        <div class="form-layout">
            <form class="form" action="#">
                <h1 class="form__title">Login</h1>
                <div class="form__field">
                    <input type="text" v-model="email" class="field__input" placeholder="Email" />
                    <label class="field__label">Email</label>
                </div>
                <div class="form__field">
                    <input v-model="password" class="field__input" type="password" placeholder="Password"/>
                    <label class="field__label">Password</label>
                </div>
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

<style>
    .field__label {
        left: 8px;
        position: absolute;
        top: 0;
        z-index: -1;
        opacity: 0;
        transition: .2s all;
    }

    .form__field input:not(:placeholder-shown) + .field__label {
        background: #FFF;
        transform: translate(0, -50%);
        opacity: 1;
        z-index: 0;
    }
</style>
