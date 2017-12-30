// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Firebase from 'firebase';
import { store } from './store';
import config from './config';

Vue.config.productionTip = false


Firebase.initializeApp(config);

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


/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
