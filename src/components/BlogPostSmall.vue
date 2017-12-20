<template>
<router-link :to="`/read/${post.id}`">
    <div class="blog__post_small">
        <p>{{ post.title }}</p>
        <img :src="post.image" alt="">
    </div>
    </router-link>
</template>

<script>
export default {
    name: 'blog-post-small',
    props: ['post']
}
</script>

<style scoped>
.blog__post_small {
    height: 200px;
    position: relative;
    margin: 0 auto;
}

.blog__post_small:hover {
    height: 200px;
    width: 100%;
    background-color: #585858;
    z-index: 1;
}

.blog__post_small:hover > img {
    opacity: 0.25;
}

.blog__post_small:hover > p {
    opacity: 1;
}

.blog__post_small > p {
   position: absolute; 
   top: calc(50% - 24px);
   left: 0;
   text-align: center; 
   width: 100%;
   color: #fff;
   opacity: 0;
   transition: opacity 250ms;
   z-index: 2;
}

.blog__post_small > img{
    width: 100%;
    height: 100%;
    margin: 0 auto;
}

@media screen and (max-width: 545px){
    .blog__post_small {
        max-width: 300px;
    }
}
</style>
