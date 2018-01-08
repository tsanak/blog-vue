// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Firebase from 'firebase';
import { store } from './store';
import config from './config';

Vue.config.productionTip = false

let app;
let fb = Firebase.initializeApp(config);
let db = fb.database();
const storageRef = fb.storage().ref();
const postsRef = db.ref('posts');
const dbRef = db;

store.dispatch('storageRef', { storageRef });
store.dispatch('savePostsRef', { postsRef });
store.dispatch('dbRef', { dbRef });

Firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    store.dispatch('getUserData', { user });
    // ...
  } else {
    // User is signed out.
    store.dispatch('signout');
  }
});

router.beforeEach((to, from, next) => {
  const currentUser = Firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth && !currentUser) {
    next('/sign-in');
  } else if (requiresAuth && currentUser) {
    next();
  } else {
    next();
  }
});

//Make sure that firebase is initialized before Vue,
//so that we can check if user is logged in
Firebase.auth().onAuthStateChanged(function(user) {
  if(!app) {
    /* eslint-disable no-new */
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
});