<template>
<router-link :to="`/read/${post.id}`">
    <div class="blog__post_small">
        <img src="/src/assets/placeholder.png" alt="">
        <div class="post_extra">
            <p class="post_category">Category {{ post.category | showOnlyNumber }}</p>
            <p class="post_title">{{ post.title }}</p>
            <p v-if="post.createdDate != null">{{ post.createdDate }}</p>
        </div>
    </div>
    </router-link>
</template>

<script>
export default {
    name: 'blog-post-small',
    props: ['post'],
    filters: {
        showOnlyNumber(value) {
            return value.substr(3, value.length);
        }
    },
    beforeMount() {
        let created = this.post.created;
        let locale = "en-us";
        if(created) {
            let date = new Date(created);
            let createdDate = {
                day: date.getDate(),
                month: date.toLocaleString(locale, { month: "short" }),
                year: date.getFullYear()
            }
            this.post.createdDate = createdDate.day + " " + createdDate.month + " " + createdDate.year;
        }
    }
}
</script>

<style scoped>
a {
    text-decoration: none;
}

.blog__post_small {
    position: relative;
    margin: 0 auto;
    border-radius: 5px;
}

.post_extra {
    background-color: #ddd;
    color: #333;
    margin-top: -5px;
    text-decoration: none;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
    width: 100%;
    padding: 10px 4px;
    border-top: 0;
    border: 1px solid transparent;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

.blog__post_small:hover .post_extra {
    background-color: transparent;
    border-color: #ddd;
}

.blog__post_small > img{
    width: 100%;
    height: 200px;
    margin: 0 auto;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
}

@media screen and (max-width: 545px){
    .blog__post_small {
        max-width: 300px;
    }
}
</style>
