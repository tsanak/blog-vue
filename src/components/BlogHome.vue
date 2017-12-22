<template>
    <div class="container">
        <blog-categories @filterCategory="filterPosts(...arguments)"></blog-categories>
        <blog-feed v-bind:posts="posts" ></blog-feed>
    </div>
</template>

<script>
import BlogNav from './BlogNav'
import BlogFeed from './BlogFeed'
import BlogCategories from './BlogCategories'
import axios from 'axios'

export default {
    name: 'BlogHome',
    components: { BlogNav, BlogFeed, BlogCategories },
    data() {
        return {
            posts: [],
            originalPosts: []
        }
    },
    beforeMount() {
        let that = this;
        axios.get("https://jsonplaceholder.typicode.com/photos")
        .then(function(response) {
            that.posts = response.data.slice(0, 100);
            for(let pos of that.posts) {
                pos["category"] = Math.floor((Math.random() * 3) + 1);
            }
            that.originalPosts = that.posts;
        })
        .catch(function(error){
            console.log(error);
        });
    },
    methods: {
        filterPosts(id) {
            this.posts = this.originalPosts;
            this.posts = this.posts.filter((p) => {
                return p.category == id;
            });            
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
