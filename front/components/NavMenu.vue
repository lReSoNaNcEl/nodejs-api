<template>
    <div class="navmenu-layout">
        <nav class="navmenu">
            <div class="navmenu__wrapper">
                <nuxt-link class="navmenu__link" to="/">Home</nuxt-link>
                <nuxt-link class="navmenu__link" to="#">Profile</nuxt-link>
                <nuxt-link class="navmenu__link" to="/photos">Photos</nuxt-link>
                <nuxt-link class="navmenu__link" to="/upload">Upload</nuxt-link>
            </div>
            <div class="navmenu__wrapper">
                <p @click="logout" class="navmenu__link" to="/login">Log Out</p>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    methods: {
        logout() {
            this.$store.commit('token/removeToken')
            this.$router.push('/login')
        }
    }
}
</script>

<style scoped>

    .navmenu-layout {
        width: 100%;
        background-color: #201C2B;
    }

    .navmenu {
        opacity: 0;
        width: 87.5rem;
        height: 5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;
        animation: AnimateLoading .4s linear .1s 1 normal;
        animation-fill-mode: forwards;
    }

    .navmenu__link {
        cursor: pointer;
        font-size: 2rem;
        color: aliceblue;
        font-weight: 400;
        margin: 0 .8rem 0 0;
        height: 100%;
    }

    .navmenu__link:hover {
        color: goldenrod;
        transition: .5s all;
    }

    @media only screen and (max-width: 1400px) {
        .navmenu {
            width: 90%;
        }
    }
</style>
