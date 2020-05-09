<template>
  <div>
    <nuxt/>
  </div>
</template>

<script>
 export default {
    created() {
        this.$store.commit('token/syncToken')
    }
 }
</script>
