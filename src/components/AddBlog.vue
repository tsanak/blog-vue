<template>
    <div>
        <div class="success" v-if="submitted">
            <h4 class="text-center">Your post was added successfully</h4>
            <div class="post-preview">
                <h4>Title</h4>
                <p>{{ post.title }}</p>
                <h4>Content</h4>
                <p>{{ post.content }}</p>
                <h4>Category</h4>
                <p>{{ post.category }}</p>
            </div>
        </div>
        <form @submit.prevent v-else>
            <div class="error" v-if="hasError">
                {{ error }}
            </div>
            <input type="text" v-model.lazy.trim='post.title' class="form__field" placeholder="Post title">
            <textarea v-model.lazy.trim='post.content' class="form__field" placeholder="Post content"></textarea>
            <p>Choose a category</p>
            <ul>
                <li v-for="cat in categories" v-bind:key="cat.id">
                    <input type="radio" :id="cat.id" :value="cat.id" v-model.lazy="post.category">
                    <label :for="cat.id">{{ cat.name }}</label>
                </li>
            </ul>
            <button type="button" class="btn btn--primary" @click="addPost">Add post</button>
        </form>
    </div>
</template>

<script>
import Firebase from 'firebase';
    export default {
        name: 'addBlog',
        data() {
            return {
                post: {
                    title: '',
                    content: '',
                    category: '',
                    created: Firebase.database.ServerValue.TIMESTAMP
                },
                submitted: false,
                error: '',
                categories: [
                    {
                        name:'Category 1',
                        id: 'cat1'
                    },
                    {
                        name:'Category 2',
                        id: 'cat2'
                    },
                    {
                        name:'Category 3',
                        id: 'cat3'
                    },
                    {
                        name:'Category 4',
                        id: 'cat4'
                    },
                ],
                postsRef: this.$store.getters.postsRef
            }
        },
        computed: {
            hasError() {
                return (this.error != '');
            }
        },
        methods: {
            addPost() {
                let title = this.post.title;
                let content = this.post.content;
                let category = this.post.category;
                if(title == '' || content == '' || category == '') {
                    this.error = 'All fields are required';
                    return;
                }
                this.error = '';
                let self = this;
                this.postsRef.push(this.post, function(error) {
                    if(error) {
                        console.log(error);
                    }
                    else {
                        //Data was posted successfully
                        self.submitted = true;
                    }
                });
            }
        }
    }
</script>

<style scoped>
    body {
        font-family: 'Raleway';
    }

    .error {
        background-color: rgb(245, 101, 101);
        color: rgb(97, 0, 0);
        padding: 20px 10px;
        width: 100%;
        margin-bottom: 20px;
    }

    .success {
        width: 50%;
        margin: 10px auto;
    }

    .post-preview {
        border: 1px solid #585858;
        padding: 10px;
    }

    form {
        width: 50%;
        margin: 10px auto;
    }

    input[type='text'] {
        display: block;
        width: 100%;
        margin-bottom: 10px;
        padding: 10px;
        font-family: 'Raleway';
    }

    textarea {
        min-height: 75px;
        resize: vertical;
        width: 100%;
        padding: 10px;
        font-family: 'Raleway';        
    }

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
        margin-bottom: 20px;
    }
    
    ul li {
        display: inline;
        margin-right: 10px;
    }

    ul li:last-child {
        margin-right: 0;
    }
</style>
