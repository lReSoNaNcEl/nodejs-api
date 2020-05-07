<template>
  <div>
    <nuxt/>
  </div>
</template>

<script>
 export default {
    created() {
        if (!localStorage['token'])
        {
            console.log('test')
        }
        this.$store.commit('token/syncToken')
    }
 }
</script>
