<template>
    <div class="wrapper">
        <NavMenu/>
        <section class="preview">
            <h1 class="preview__title">
                <p class="preview__company">By Resonance</p>
                <p class="preview__service">Nuxt App</p>
                <p class="preview__greeting">Welcome</p>
            </h1>
        </section>
    </div>
</template>

<script>
import NavMenu from '@/components/NavMenu'

export default {
    components: {
        NavMenu
    },
    middleware: 'auth'
}
</script>
