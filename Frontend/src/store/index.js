import Vue from 'vue'
import Vuex from 'vuex'
import {
    stat
} from 'fs';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        currentUserId: '1',
        currentUserId_ID: '1',
        currentUsername: 'hcq',
        currentUserPassword:'11111111',
        currentUserBio: 'hello',
        currentUserPhoto: 'https://i.ibb.co/515PkG6/20190715145133.jpg',
    },
    mutations: {
        addCurrentUserId(state, currentId) {
            state.currentUserId = currentId;
        },
        addCurrentUserId_ID(state, currentId) {
            state.currentUserId_ID = currentId;
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
