import Vue from 'vue';
import VueMeta from 'vue-meta';
import axios from 'axios';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import i18n from './i18n';
import store from './store';

Vue.config.productionTip = false;

Vue.use(VueMeta);

const dark = localStorage.dark === 'true';
vuetify.framework.theme.dark = dark;
store.commit('setTheme', dark);

const drawer = localStorage.drawer === 'true';
store.commit('setDrawer', drawer);

if (localStorage.tokenAccessToken && localStorage.tokenRefreshToken) {
  store.commit('refresh', {
    accessToken: localStorage.tokenAccessToken,
    refreshToken: localStorage.tokenRefreshToken
  });
}

axios.defaults.baseURL = 'http://127.0.0.1:8081/api';
// axios.defaults.baseURL = 'https://imoogoo.com/api';
axios.defaults.headers.Authorization = `Bearer ${localStorage.tokenAccessToken}`;

new Vue({
  vuetify,
  router,
  i18n,
  store,
  render: (h) => h(App)
}).$mount('#app');
