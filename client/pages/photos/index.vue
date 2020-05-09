<template>
    <div class="wrapper">
        <NavMenu/>
        <section class="photos">
            <div class="photos__container">
                <nuxt-link class="photos__link" v-for="photo in photos" :to="'/photo/' + photo._id">
                    <img class="photos__img" :src="`/${photo.url}`"/>
                </nuxt-link>
            </div>
        </section>
        <Footer/>
    </div>
</template>

<script>
import NavMenu from '@/components/NavMenu'
import Footer from '@/components/Footer'
export default {
    computed: {
        photos() {return this.$store.getters['photo/getPhotos']}
    },
    created() {
        const token = this.$store.getters['token/getToken']
        this.$store.dispatch('photo/savePhotos', token).then(() => console.log(this.photos))
    },
    components: {NavMenu, Footer},
    middleware: 'auth'
}
</script>

<style>
    .photos {
        width: 100%;
        background-color: white;
    }

    .photos__container {
        width: 87.5rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        margin: 0 auto;
        padding: 3rem 0 2rem 0;
        opacity: 0;
        animation: AnimateLoading 1s linear .2s 1 normal;
        animation-fill-mode: forwards;
    }

    .photos__link {
        width: 24%;
        margin: 0 .8rem .8rem 0;
    }

    .photos__img {
        width: 100%;
        height: 200px;
        background-size: cover;
        background-repeat: no-repeat;
    }

    .photos__img::before {
        content: 'dasdad';
    }

    .photos__img:hover {
        transform: scale(1.02, 1.02);
        filter: grayscale(80%);
        transition: .6s all;
        cursor: pointer;
    }

    @media only screen and (max-width: 1280px){
        .photos__link {width: 31.5%;}
        .photos__container {width: 90%;}
    }

    @media only screen and (max-width: 1080px){
        .photos__link {width: 48%;}
        .photos__img {height: 250px;}
    }

    @media only screen and (max-width: 768px){
        .photos__link {width: 100%;}
        .photos__img {height: 300px;}
    }
</style>
