<template>
    <div class="wrapper">
        <NavMenu/>
        <section class="photos">
            <div class="photos__container">
                <img class="photos__photo" :src="`/${photo.url}`">
            </div>
        </section>
        <div class="photo__controls">
            <button @click="deletePhoto">Delete</button>
        </div>
        <Footer/>
    </div>
</template>

<script>
import NavMenu from '@/components/NavMenu'
import Footer from '@/components/Footer'
export default {
    data() {
        return {
            id: this.$route.params.id,
        }
    },
    computed: {
        photo() {return this.$store.getters['photo/getPhoto']},
        token() {return this.$store.getters['token/getToken']}
    },
    methods: {
        deletePhoto() {
            this.$store.dispatch('photo/removePhoto', {
                token: this.token,
                id: this.id
            }).then(() => this.$router.push('/photos'))
        }
    },
    created() {
        this.$store.dispatch('photo/savePhotoById', {
            token: this.token,
            id: this.id
        }).then(() => console.log(this.photo))
    },
    components: {NavMenu, Footer},
}
</script>
