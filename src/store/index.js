import Vue from 'vue';
import Vuex from 'vuex';
import Menu from '@/assets/core/menu.json';
import Link from '@/assets/core/link.json';
import Account from '@/assets/core/account.json';
import UserMenu from '@/assets/user/menu.json';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    language: localStorage.language || window.navigator.language.toLowerCase() || 'cn',
    drawer: false,
    dark: null,
    logoUrl: '/assets/images/logo.png',
    menus: Menu,
    links: Link,
    accounts: Account,
    userMenus: UserMenu,
    user: {
      id: 0,
      name: null,
      email: null,
      isSuperAdmin: false
    },
    token: {
      accessToken: null,
      refreshToken: null
    },
    project: {
      id: 0,
      name: null,
      displayName: null
    }
  },
  mutations: {
    signIn(state, data) {
      const {
        id,
        name,
        email,
        isSuperAdmin,
        accessToken,
        refreshToken
      } = data;
      localStorage.userId = id;
      localStorage.userName = name;
      localStorage.userEmail = email;
      localStorage.userIsSuperAdmin = isSuperAdmin;
      localStorage.tokenAccessToken = accessToken;
      localStorage.tokenRefreshToken = refreshToken;
      state.user = {
        id,
        name,
        email,
        isSuperAdmin
      };
      state.token = {
        accessToken,
        refreshToken
      };
    },
    refresh(state, payload) {
      if (payload.accessToken && payload.refreshToken) {
        localStorage.tokenAccessToken = payload.accessToken;
        localStorage.tokenRefreshToken = payload.refreshToken;
        state.user.id = localStorage.userId;
        state.user.name = localStorage.userName;
        state.user.email = localStorage.userEmail;
        state.user.isSuperAdmin = localStorage.userIsSuperAdmin;
        state.token.accessToken = localStorage.tokenAccessToken;
        state.token.refreshToken = localStorage.tokenRefreshToken;
      }
    },
    signOut(state) {
      localStorage.removeItem('userId');
      localStorage.removeItem('userName');
      localStorage.removeItem('userEmail');
      localStorage.removeItem('userIsSuperAdmin');
      localStorage.removeItem('tokenAccessToken');
      localStorage.removeItem('tokenRefreshToken');
      state.user.id = 0;
      state.user.name = null;
      state.user.email = null;
      state.user.isSuperAdmin = null;
      state.token.accessToken = null;
      state.token.refreshToken = null;
    },
    setDrawer(state, payload) {
      localStorage.drawer = payload;
      state.drawer = payload;
    },
    toggleDrawer(state) {
      localStorage.drawer = !state.drawer;
      state.drawer = !state.drawer;
    },
    setTheme(state, payload) {
      localStorage.dark = payload;
      localStorage.logoUrl = payload ? '/assets/images/logo-dark.png' : '/assets/images/logo.png';
      state.dark = payload;
      state.logoUrl = state.dark ? '/assets/images/logo-dark.png' : '/assets/images/logo.png';
    },
    setLanguage(state, payload) {
      localStorage.language = payload;
      state.language = payload;
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    isSignedIn: (state) => (!((state.token.accessToken === undefined || state.token.accessToken === null || state.token.accessToken === ''))),
    accessToken: (state) => (state.token.accessToken ? state.token.accessToken : ''),
    accounts: (state) => state.accounts,
    userMenus: (state) => state.userMenus,
    user: (state) => state.user,
    token: (state) => state.token,
    project: (state) => state.project,
    links: (state) => state.links,
    menus: (state) => state.menus,
    logoUrl: (state) => state.logoUrl,
    dark: (state) => state.dark,
    drawer: (state) => state.drawer,
    language: (state) => state.language
  }
});
