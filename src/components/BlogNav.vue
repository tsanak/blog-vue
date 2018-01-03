<template>
    <nav>
        <router-link :to="{ name: 'home' }">
            <img src="../assets/logo.png">
        </router-link>
        <ul class="nav-right" v-if="!isLoggedIn">
            <li>
                <router-link :to="{ name: 'sign-in' }">
                    Sign in
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'sign-up' }">
                    Sign up
                </router-link>
            </li>
        </ul>
        <ul class="nav-right" v-else>
            <li>
                <router-link :to="{ name: 'add-blog'}">
                    Add new post
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'dashboard'}">
                    Dashboard
                </router-link>
            </li>
            <li>
                <a href="#" @click="logout">
                    Sign out
                </a>
            </li>
        </ul>
    </nav>
</template>

<script>
    import Firebase from "firebase";
    export default {
        name: 'blog-nav',
        computed: {
            isLoggedIn() {
                let userData = this.$store.getters.user;
                return !(userData == null);
            }
        },
        methods: {
            logout: function() {
                Firebase.auth().signOut().then(function() {
                // Sign-out successful.
                this.$router.replace("/");
                }).catch(function(error) {
                // An error happened.
                });
            }
        }
    }
</script>

<style scoped>
    img {
        height: 100%;
        padding-left: 5px;
    }

    .nav-right {
        float: right;
        height: 100%;
        margin: 0;
        padding: 0;
        margin-right: 20px;
        list-style: none;
        display: -webkit-box;
    }

    .nav-right > li {
        height: 100%;
    }

    .nav-right > li > a {
        text-decoration: none;
        color: #fff;
        line-height: 60px;
        display: inline-block;
        padding: 0 10px;
    }

    .nav-right > li:hover, .nav-right > li > .active  {
        background-color: #1574d2;
        cursor: pointer;
    }

</style>
