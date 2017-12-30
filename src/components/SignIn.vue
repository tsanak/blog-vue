<template>
    <div class="container">
        <div class="container__item">
            <div class="form" v-if="canContinue">
                <p class='error' v-if="hasError">{{error}}</p>
                <input type="email" class="form__field" v-model="email" placeholder="Your E-Mail Address" />
                <input class="form__field" type="password" v-model="password" id="password" placeholder="*******">            
                <button @click="signin" class="btn btn--primary">Sign in</button>
            </div>
        </div>
    </div>
</template>

<script>
    import Firebase from "firebase";

    export default {
        name: 'sign-in',
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
            signin() {
                let email = this.email;
                let password = this.password;
                let self = this;
                if( email.length == 0 || password.length == 0) {
                    this.error = "Both fields are required.";
                    return;
                }
                this.error = '';
                Firebase.auth()
                .signInWithEmailAndPassword(this.email, this.password)
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

    .btn {
        display: inline-block;
        background: transparent;
        color: inherit;
        font: inherit;
        border: 0;
        outline: 0;
        padding: 0;
        transition: all 200ms ease-in;
        cursor: pointer;
    }

    .btn--primary {
        background: #7f8ff4;
        color: #fff;
        box-shadow: 0 0 10px 2px rgba(0, 0, 0, .1);
        border-radius: 2px;
        padding: 12px 36px;
    }

    .btn--primary:hover {
        background: #6c7ff2;
    }

    .btn--primary:active {
        background: #7f8ff4;
        box-shadow: inset 0 0 10px 2px rgba(0, 0, 0, .2);
    }

    .form__field {
        width: 360px;
        background: #fff;
        color: #a3a3a3;
        font: inherit;
        box-shadow: 0 6px 10px 0 rgba(0, 0, 0, .1);
        border: 0;
        outline: 0;
        padding: 22px 18px;
        display: block;
        margin: 10px 0;
    }

    .pull-right {
        float: right;
    }
</style>
