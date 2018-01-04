<template>
    <div class="blog__post" v-if="singlePost != null">
        <img src="/src/assets/placeholder.png" alt="">
        <div class="content">
            <h4>{{ singlePost.title }}</h4>
            <p>{{ singlePost.id }}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'blog-post',
    props: ['post'],
    computed: {
        singlePost() {
            return this.$store.getters.singlePost;
        }
    },
    beforeMount() {
        this.$store.dispatch('getPostById', { id: this.post }); 
    }
}
</script>

<style scoped>
.blog__post {
    display: grid;
    grid-template: 1fr 1fr / 1fr 1fr;
    justify-content: center;
    max-width: 80%;
}

.blog__post.fade-leave-active {
    transition: opacity 0s;
}

.blog__post > img {
    max-height: 250px;
    grid-column: 1 / 2;
    grid-row: 1 / 3;
    margin: 0 auto;
}

.blog__post > .content {
    grid-column: 2 / 3;
    grid-row: 1 / 3;
}

</style>
