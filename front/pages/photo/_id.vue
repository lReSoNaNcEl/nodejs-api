<template>
    <div class="wrapper">
        <NavMenu/>
        <div>{{$route.params.id}}</div>
        <section class="photos">
            <div class="photos__container">
                <img class="photos__photo" src="../../static/images/1.jpg">
            </div>
        </section>
        <Footer/>
    </div>
</template>

<script>
import NavMenu from '@/components/NavMenu'
import Footer from '@/components/Footer'
export default {
    components: {NavMenu, Footer},
}
</script>
