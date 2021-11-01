import Vue from 'vue';
import Vuex from 'vuex';



Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        sampleBlogCards: [
            { blogTitle: "Döküman #1", blogCoverPhoto: "stock-1", blogDate: "Mayıs 1, 2021" },
            { blogTitle: "Döküman #2", blogCoverPhoto: "stock-2", blogDate: "Mayıs 1, 2021" },
            { blogTitle: "Döküman #3", blogCoverPhoto: "stock-3", blogDate: "Mayıs 1, 2021" },
            { blogTitle: "Döküman #4", blogCoverPhoto: "stock-4", blogDate: "Mayıs 1, 2021" },
        ],
        editPost: null,
        user: null,
        profileEmail: null,
        profileFristName: null,
        profileLastName: null,
        profileUserName: null,
        profileId: null,
        profileIniitials: null,
    },
    mutations: {
        toogleEditPost(state, payload) {
            state.editPost = payload;
            console.log(state.editPost);
        },
    },
    actions: {},
    modules: {}
})