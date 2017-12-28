<template>
  <div class="categories__container">
      <div class="category active__category" @click="filterCategory(0, $event)">Show all</div>
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
                ],
                activeCategory: 0
            }
        },
        methods: {
            activateCategoryCss(event) {
                // Remove/Add .active__category on the category div that the user clicked
                let cat_els = document.getElementsByClassName("active__category");

                for(let el of cat_els) {
                    if(el == event.target)  return false;
                    el.classList.remove("active__category");
                }

                event.target.classList.add("active__category");
            },
            filterCategory(id, $event) {
                this.activateCategoryCss(event);
                this.activeCategory = id;
                if( id == 0) this.$store.dispatch('resetCategoryFiltering');
                else this.$store.dispatch('getPostsInCategory', { id });
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
