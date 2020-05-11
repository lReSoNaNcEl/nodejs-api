<template>
    <div class="wrapper">
        <div class="form-layout">
            <form class="form" action="#">
                <h1 class="form__title">Login</h1>
                <div class="form__field">
                    <input ref="email" type="text" @focusout="validateEmail" v-model="email" class="field__input" placeholder="Email" />
                    <label ref="emailLabel" class="field__label">Email</label>
                </div>
                <div class="form__field">
                    <input ref="password" @focusout="validatePassword" v-model="password" class="field__input" type="password" placeholder="Password"/>
                    <label ref="passwordLabel" class="field__label">Password</label>
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
            email: '',
            password: '',
        }
    },
    created() {
        if (localStorage['token'])
            this.$router.push('/')
    },
    methods: {
        getAuthToken() {
            if (this.validateEmail() && this.validatePassword())
                this.$store.dispatch('token/saveToken', {
                    email: this.email,
                    password: this.password
                }).then(() => {
                    if (localStorage['token'])
                        this.$router.push('/')
                })
        },
        validateEmail() {
            const label = this.$refs.emailLabel
            const email = this.email
            const border = this.$refs.email.style

            if (email !== '')
                if (!/^([a-zA-z0-9])+([@])([a-z])+([.])([a-z]){2,5}$/.test(email)) {
                    label.textContent = 'invalid email'
                    border.boxShadow = '1px 1px 2px 2px red'
                } else {
                    label.textContent = 'Email'
                    border.boxShadow = '1px 1px 2px 2px green'
                    return true
                }
            return false
        },
        validatePassword() {
            const label = this.$refs.passwordLabel
            const password = this.password
            const border = this.$refs.password.style

            if (password !== '')
                if (password.length <= 5) {
                    label.textContent = 'length must be more than 5 characters'
                    border.boxShadow = '1px 1px 2px 2px red'
                } else if (!/^[a-zA-Z0-9]{6,255}$/.test(password)) {
                    label.textContent = 'Only letters and numbers'
                    border.boxShadow = '1px 1px 2px 2px red'
                } else {
                    label.textContent = 'password'
                    border.boxShadow = '1px 1px 2px 2px green'
                    return true
                }
            return false
        }
    },
}
</script>

<style>

</style>
