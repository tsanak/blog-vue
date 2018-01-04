import Vue from 'vue';
import Vuex from 'vuex';
//import createPersistedState from 'vuex-persistedstate';
import axios from 'axios';
import { map } from '@firebase/util';

Vue.use(Vuex);

export const store = new Vuex.Store({
//    plugins: [createPersistedState()],
    state: {
        posts: [],
        filteredPosts: [],
        singlePost: null,
        postsUpdated: false,
        isLoading: false,
        user: null,
        postsRef: null,
        dbRef: null
    },
    getters: {
        posts(state) {
            return state.posts;
        },
        filteredPosts(state) {
            return state.filteredPosts;
        },
        postsUpdated(state) {
            return state.postsUpdated;
        },
        isLoading(state) {
            return state.isLoading;
        },
        post(state) {
            return postId => state.posts.filter(blogPost => {
                return blogPost.id == postId;
            });
        },
        user(state) {
            return state.user;
        },
        postsRef(state) {
            return state.postsRef;
        },
        singlePost(state) {
            return state.singlePost;
        },
        dbRef(state) {
            return state.dbRef;
        }
    },
    mutations: {
        getInitialPosts(state, posts) {
            state.posts = posts;
            state.filteredPosts = posts;
            state.postsUpdated = true;
            state.isLoading = false;
        },
        getPostsInCategory(state, posts) {
            state.filteredPosts = posts;
            state.isLoading = false;
        },
        resetCategoryFiltering(state) {
            state.filteredPosts = state.posts;
            state.isLoading = false;
        },
        isLoading(state) {
            state.isLoading = true;
        },
        getUserData(state, userData) {
            state.user = userData;
        },
        signout(state) {
            state.user = null;
        },
        savePostsRef(state, postsRef) {
            state.postsRef = postsRef;
        },
        getPostById(state, singlePost) {
            state.singlePost = singlePost;
        },
        dbRef(state, dbRef) {
            state.dbRef = dbRef;
        }
    },
    actions: {
        async getInitialPosts({ commit, state }) {
            try {
                state.postsRef.on('value', function(snapshot) {
                    let postsObj = snapshot.val();
                    let posts = [];
                    for(let k of Object.keys(postsObj)) {
                        let obj = postsObj[k];
                        obj['id'] = k;
                        posts.push(obj);
                    }
                    commit('getInitialPosts', posts);                
                });
            }
            catch( error ){
                console.log(error);
            };
        },
        getPostsInCategory({ commit, state }, payload) {
            const filteredPosts = state.posts.filter(blogPost => {
                return blogPost.category == payload.id;
            });
            commit('getPostsInCategory', filteredPosts);
        },
        getPostById({ commit, state }, payload) {
            state.dbRef.ref('/posts/' + payload.id).once('value', function(value) {
                let singlePost = value.val();
                singlePost['id'] = payload.id;
                commit('getPostById', singlePost);
            });
        },
        resetCategoryFiltering({ commit }) {
            commit('resetCategoryFiltering');
        },
        isLoading({ commit }) {
            commit('isLoading');
        },
        getUserData({ commit, state }, payload) {
            let user = {
                displayName: '',
                email: '',
                phoneNumber: '',
                photoURL: ''
            };
            let puser = payload.user;
            user.displayName = puser.displayName;
            user.email = puser.email;
            user.phoneNumber = puser.phoneNumber;
            user.photoURL = puser.photoURL;
            commit('getUserData', user);
        },
        signout({ commit }) {
            commit('signout');
        },
        savePostsRef({ commit }, payload) {
            commit('savePostsRef', payload.postsRef);
        },
        dbRef({ commit }, payload) {
            commit('dbRef', payload.dbRef);
        }
    }
});

