export const state = () => ({
    token: null
})
export const actions = {
    async saveToken(ctx, {email, password}) {
        let data = await fetch('http://localhost:5000/api/auth/login', {
            headers: {'Content-type': 'application/json'},
            method: 'POST',
            body: JSON.stringify({email, password})
        })
        let token = await data.json()

        if ('token' in token)
            localStorage.setItem('token', await token.token)

        ctx.commit('setToken', await localStorage['token'])
    }
}

export const mutations = {
    syncToken: state => state.token = localStorage['token'],
    setToken: (state, payload) => state.token = payload,
    removeToken: state => {
        localStorage.removeItem('token')
        state.token = null
    }
}

export const getters = {
    getToken: state => state.token
}
