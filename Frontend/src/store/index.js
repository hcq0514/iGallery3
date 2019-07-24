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
        setCurrentUserId(state, currentId) {
            state.currentUserId = currentId;
        },
        setCurrentUsername(state, username) {
            state.currentUsername = username;
        },
        setCurrentUserPhoto(state, photo) {
            state.currentUserPhoto = photo;
        },
        setCurrentUserBio(state, bio) {
            state.currentUserBio = bio;
        },
    }
})
