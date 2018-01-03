<template>
    <div v-if="user">
        <p>Dashboard {{user.email}}</p>
    </div>
</template>

<script>
    export default {
        name: 'dashboard',
        computed: {
            user() {
                return this.$store.getters.user;                
            }
        },
        beforeUpdate() {
            let user = this.user;
            if(!user) {
                this.$router.go('/');
            }
            
        }
    }
</script>