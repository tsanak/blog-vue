<template>
  <div class="categories__container">
        <div
            class="category"
            v-for="category in categories"
            v-bind:key="category.id"
            @click="filterCategory(category.id, $event)">
            {{ category.title }}
        </div>
  </div>
</template>

<script>
    export default {
        name: 'blog-categories',
        data() {
            return {
                categories: [
                    {
                        id: 1,
                        title: "Category 1"
                    },
                    {
                        id: 2,
                        title: "Category 2"
                    },
                    {
                        id: 3,
                        title: "Category 3"
                    },
                    {
                        id: 4,
                        title: "Category 4"
                    },
                    {
                        id: 5,
                        title: "Category 5"
                    },
                    {
                        id: 6,
                        title: "Category 6"
                    },
                    {
                        id: 7,
                        title: "Category 7"
                    }
                ],
                activeCategory: 0
            }
        },
        methods: {
            filterCategory(id, $event) {
                // Remove/Add .active__category on the category div that the user clicked
                let cat_els = document.getElementsByClassName("active__category");
                for(let el of cat_els) {
                    if(el == event.target)  return;
                    el.classList.remove("active__category");
                }
                
                event.target.classList.add("active__category");
                this.activeCategory = id;
                this.$emit('filterCategory', id);
            }
        }
    }
</script>

<style scoped>
    div.categories__container {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        margin-right: -20px;
        margin-left: -20px;
        background-color: #ddd;
    }

    .category {
        padding: 15px 10px;
        color: #585858;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .category:hover,
    .category.active__category {
        background-color: #f5f5f5;
    }

</style>
