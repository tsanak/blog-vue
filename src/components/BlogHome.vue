<template>
    <div class="container">
        <blog-categories></blog-categories>
        <blog-feed v-bind:posts="posts" ></blog-feed>
    </div>
</template>

<script>
import BlogNav from './BlogNav'
import BlogFeed from './BlogFeed'
import BlogCategories from './BlogCategories'

export default {
    name: 'BlogHome',
    components: { BlogNav, BlogFeed, BlogCategories },
    beforeMount() {
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
</style>
