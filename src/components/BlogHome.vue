<template>
    <div class="container">
        <blog-feed v-bind:posts="posts"></blog-feed>
    </div>
</template>

<script>
import BlogNav from './BlogNav'
import BlogFeed from './BlogFeed'
import axios from 'axios'

export default {
    name: 'BlogHome',
    components: { BlogNav, BlogFeed },
    data() {
        return {
            posts: []
        }
    },
    beforeMount() {
        let that = this;
        axios.get("https://jsonplaceholder.typicode.com/photos")
        .then(function(response) {
            that.posts = response.data.slice(0, 100);
        })
        .catch(function(error){
            console.log(error);
        });
    }
}
</script>

<style scoped>
    div.container {
        width: 80%;
        padding: 20px;
        min-height: 250px;
        margin: 0 auto;
        border: 1px solid #585858;
        text-align: center;
    }
</style>
