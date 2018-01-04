<template>
    <div>
        <form @submit.prevent>
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
    export default {
        name: 'addBlog',
        data() {
            return {
                post: {
                    title: '',
                    content: '',
                    category: ''
                },
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
                this.postsRef.push(this.post);
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
