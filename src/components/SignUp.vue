<template>
    <div class="container">
        <div class="container__item">
            <div class="form" v-if="canContinue">
                <p class='error' v-if="hasError">{{error}}</p>
                <input type="email" class="form__field" v-model="email" placeholder="Your E-Mail Address" />
                <input class="form__field" type="password" v-model="password" id="password" placeholder="*******">            
                <button @click="signup" class="btn btn--primary">Sign up</button>
            </div>
        </div>
    </div>
</template>

<script>
    import Firebase from "firebase";

    export default {
        name: 'sign-up',
        data() {
            return {
                email: '',
                password: '',
                error: '',
            }
        },
        computed: {
            canContinue() {
                if(Firebase.auth().currentUser) {
                    this.$router.replace('/');
                    return false;
                }
                return true;
            },
            hasError() {
                if(this.error != '') return true;
                return false;
            }
        },
        methods: {
            signup() {
                let email = this.email;
                let password = this.password;
                let self = this;
                if( email.length == 0 || password.length == 0) {
                    this.error = "Both fields are required.";
                    return;
                }
                this.error = '';
                Firebase.auth()
                .createUserWithEmailAndPassword(this.email, this.password)
                .then( user => { this.$router.replace("/"); },
                error => { self.error = error.message; });
            }
        }
    }
</script>


<style scoped>
    html, body, .container {
        height: 100%;
        font: 1rem "PT Sans", sans-serif;
    }

    a {
        color: inherit;
    }

    a:hover {
        color: #7f8ff4;
    }

    .error {
        color: #9e3939;
    }

    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .uppercase {
        text-transform: uppercase;
    }

    .pull-right {
        float: right;
    }
</style>
