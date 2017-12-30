<template>
  <div id="app">
    <div class="header">
      <blog-nav></blog-nav>
    </div>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import BlogNav from '@/components/BlogNav'

export default {
  components: {
    BlogNav
  },
  name: 'app'
}
</script>

<style>
body {
  margin: 0;
  padding-top: 70px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding-bottom: 20px;
}

.header {
  background-color: dodgerblue;
  position: fixed;
  right: 0;
  left: 0;
  z-index: 3;
  height: 60px;
  top: 0;
}

.header > nav {
  height: 100%;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity 1s
}

.component-fade-enter, .component-fade-leave-to {
  opacity: 0
}
</style>
