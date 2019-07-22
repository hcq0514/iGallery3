import Vue from 'vue'
import Vuex from 'vuex'
import {
    stat
} from 'fs';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        currentUserId: '',
        currentUsername: '',
        currentUserPassword:'',
        currentUserBio: '',
        currentUserPhoto: '',
    },
    mutations: {
        addCurrentUserId(state, currentId) {
            state.currentUserId = currentId;
        },
        addCurrentUserId_ID(state, currentId) {
            state.currentUserId = currentId;
        },
        addCurrentUsername(state, username) {
            state.currentUsername = username;
        },
        addCurrentUserPhoto(state, photo) {
            state.currentUserPhoto = photo;
        },
        addCurrentUserPassword(state, password) {
            state.currentUserPassword = password;
        },
        addCurrentUserBio(state, bio) {
            state.currentUserBio = bio;
        },
    }
})
