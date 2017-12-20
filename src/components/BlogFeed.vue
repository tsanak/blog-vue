<template>
    <div class="feed__container">
        <h1>Blog feed</h1>
        <div class="blog__feed">
                <blog-post-small
                v-for='(item, index) in posts'
                v-bind:key='index'
                v-bind:post="{ title: item.title, image: item.url , id: item.id }"
                />
        </div>
    </div>
</template>

<script>
import BlogPostSmall from './BlogPostSmall'

export default {
    name: 'blog-feed',
    components: { BlogPostSmall },
    props: {
        posts: Array
    },
}
</script>

<style scoped>
.blog__feed {
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10px;
}

@media screen and (max-width: 768px){
    .blog__feed {
        grid-template-columns: 1fr 1fr;
    }
}

@media screen and (max-width: 545px){
    .blog__feed {
        grid-template-columns: 1fr;
    }
}
</style>
