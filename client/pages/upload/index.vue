<template>
    <div class="wrapper">
        <div class="form-layout">
            <form name="upload" class="form" action="#" enctype="multipart/form-data">
                <h1 class="form__title">Upload Image</h1>
                <input name="photo" class="form__field" type="file" placeholder="Password:">
                <button @click="uploadPhoto" class="form__btn" type="button">Upload</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        uploadPhoto() {
            const token = this.$store.getters['token/getToken']

            fetch('http://localhost:5000/api/photo', {
                headers: {'Authorization': token},
                method: 'POST',
                body: new FormData(document.forms.upload)
            }).then(() => this.$router.push('/photos'))
        }
    },
    middleware: 'auth'
}
</script>
