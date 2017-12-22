<template>
    <nav>
        <router-link :to="{ name: 'home'}">
            <img src="../assets/logo.png">
        </router-link>
    </nav>
</template>

<script>
    export default {
        name: 'blog-nav',
    }
</script>

<style scoped>
    img {
        height: 100%;
        padding-left: 5px;
    }
</style>
