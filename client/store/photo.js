export const state = () => ({
    photos: []
})
export const actions = {
    async savePhotos(ctx, token) {
        let data = await fetch('http://localhost:5000/api/photo', {headers: {'Authorization': token}})
        let photos = await data.json()
        ctx.commit('setPhotos', await photos)
    }
}

export const mutations = {
    setPhotos: (state, payload) => state.photos = payload,
}

export const getters = {
    getPhotos: state => state.photos
}
