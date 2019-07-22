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
        currentUserBio: '',
        currentUserPhoto: '',
    },
    mutations: {
        addCurrentUserId(state, currentId) {
            state.currentUserId = currentId;
        },
        addCurrentUsername(state, username) {
            state.currentUsername = username;
        },
        addCurrentUserPhoto(state, photo) {
            state.currentUserPhoto = photo;
        },
        addCurrentUserBio(state, bio) {
            state.currentUserBio = bio;
        },
    }
})
