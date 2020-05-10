export const state = () => ({
    photos: [],
    photo: {
        url: ''
    }
})
export const actions = {
    async removePhoto(ctx, {token, id}) {
        let data = await fetch(`http://localhost:5000/api/photo/${id}`, {headers: {'Authorization': token}, method: 'DELETE'})
        ctx.commit('removePhoto')
    },
    async savePhotoById(ctx, {token , id}) {
        let data = await fetch(`http://localhost:5000/api/photo/${id}`, {headers: {'Authorization': token}})
        let photo = await data.json()
        ctx.commit('setPhoto', await photo)
    },
    async savePhotos(ctx, token) {
        let data = await fetch('http://localhost:5000/api/photo', {headers: {'Authorization': token}})
        let photos = await data.json()
        ctx.commit('setPhotos', await photos)
    }
}

export const mutations = {
    setPhotos: (state, payload) => state.photos = payload,
    setPhoto: (state, payload) => state.photo = payload,
    removePhoto: (state) => state.photo = {},
}

export const getters = {
    getPhotos: state => state.photos,
    getPhoto: state => state.photo
}
