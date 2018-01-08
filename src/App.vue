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
  font-family: 'Raleway', 'Open Sans', Helvetica, Arial, sans-serif;
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

.btn--danger {
  background: #97282e;
  color: #fff;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, .1);
  border-radius: 2px;
  padding: 12px 36px;
}

.btn--danger:hover, .btn--danger:active {
  background: #852328;
}

.center {
  margin: 0 auto;
  text-align: center;
  display: block;
}

.d-block {
  display: block;
}

.form__field {
  width: 360px;
  background: #fff;
  color: #000;
  font: inherit;
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, .1);
  border: 1px solid #efefef;
  outline: 0;
  padding: 22px 18px;
  display: block;
  margin: 10px 0;
}

.text-center{
  text-align: center;
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

.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity 1s
}

.component-fade-enter, .component-fade-leave-to {
  opacity: 0
}
</style>
