<template>
    <nav>
        <router-link :to="{ name: 'home'}">
            <img src="../assets/logo.png">
        </router-link>
        <p> {{content}} </p>
    </nav>
</template>

<script>
    export default {
        name: 'blog-nav',
        props: ['content', 'navs']
    }
</script>

<style scoped>
    img {
        margin: 0 auto;
        padding-bottom: 10px;
    }
</style>
