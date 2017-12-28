<template>
    <div class="container">
        <blog-categories></blog-categories>
        <transition name="component-fade" mode="out-in">        
            <div class="loader-container" v-if="loading">
                <loader></loader>
                <h3>Loading posts</h3>
            </div>
            <blog-feed v-else v-bind:posts="posts"></blog-feed>
        </transition>
    </div>
</template>

<script>
import BlogNav from './BlogNav'
import BlogFeed from './BlogFeed'
import BlogCategories from './BlogCategories'
import Loader from './Loader'

export default {
    name: 'BlogHome',
    components: { BlogNav, BlogFeed, BlogCategories, Loader },
    beforeMount() {
        this.$store.dispatch('isLoading');
        const postsUpdated = this.$store.getters.postsUpdated;
        if(!postsUpdated) {
            this.$store.dispatch('getInitialPosts');
        }
        else {          
            this.$store.dispatch('resetCategoryFiltering');
        }
    },
    computed: {
        posts() {
            return this.$store.getters.filteredPosts;
        },
        loading() {
            return this.$store.getters.isLoading;
        }
    }
}
</script>

<style scoped>
    div.container {
        padding: 20px;
        margin: 0 auto;
        text-align: center;
        position: relative;
    }

    div.loader-container {
        height: 100px;
    }
</style>
