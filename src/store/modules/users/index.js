import AuthService from "@/services/AuthServices"
import PasswordResetService from "@/services/PasswordResetService"

export default {
    state: {
        user: {
            name: '',
            email: '',
            image: '',
        },
        loggedIn: false,
    },
   
    mutations: {
        SET_USER (state, user) {
            state.user = user
            state.loggedIn = true
        },
        LOGOUT  (state) {
            state.user = {
                name: '',
                email: '',
            },
            state.loggedIn = false
        }
    },

    actions: {
        auth ({dispatch}, params) {
            return AuthService.auth(params)
                                .then(() => dispatch('getMe'))
        },

        getMe({commit}) {
            commit('CHANGE_LOADING', true)

            AuthService.getMe()
                        .then(user => commit('SET_USER', user))
                        .finally(() => commit('CHANGE_LOADING', false))
        },

        forgetPassword (_, params) {
            return PasswordResetService
            .forgetPassword(params)
        },

        logout ({commit}) {
            return AuthService
            .logout()
            .then(() => commit('LOGOUT'))
            .finally(() => commit('CHANGE_LOADING'))
        }
    },
}