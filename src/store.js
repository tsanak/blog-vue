import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        posts: [],
        filteredPosts: [],
        postsUpdated: false,
        isLoading: false
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
        }
    },
    actions: {
        async getInitialPosts({ commit, state }) {
            try {
                const postsApi = await axios.get("https://jsonplaceholder.typicode.com/photos")
                const posts = postsApi.data.slice(0, 100);
                for(let pos of posts) {
                    pos["category"] = Math.floor((Math.random() * 3) + 1);
                }
                commit('getInitialPosts', posts); 
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
        resetCategoryFiltering({ commit }) {
            commit('resetCategoryFiltering');
        },
        isLoading({ commit }) {
            commit('isLoading');
        }
    }
});

