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
      clientId: null,
      username: null,
      email: null,
      phone: null,
      accessToken: null,
      refreshToken: null
    },
    profile: {
      nickname: null,
      avatarUrl: null
    }
  },
  mutations: {
    signIn(state, data) {
      const {
        id,
        clientId,
        username,
        email,
        phone,
        accessToken,
        refreshToken
      } = data;
      localStorage.id = id;
      localStorage.clientId = clientId;
      localStorage.username = username;
      localStorage.email = email;
      localStorage.phone = phone;
      localStorage.accessToken = accessToken;
      localStorage.refreshToken = refreshToken;
      state.user = {
        id,
        clientId,
        username,
        email,
        phone,
        accessToken,
        refreshToken
      };
    },
    setNickname(state, payload) {
      localStorage.nickname = payload;
      state.profile.nickname = payload;
    },
    setAvatarUrl(state, payload) {
      localStorage.avatarUrl = payload;
      state.profile.avatarUrl = payload;
    },
    refresh(state, payload) {
      if (payload.accessToken && payload.refreshToken) {
        localStorage.accessToken = payload.accessToken;
        localStorage.refreshToken = payload.refreshToken;
        state.user.id = localStorage.id;
        state.user.clientId = localStorage.clientId;
        state.user.username = localStorage.username;
        state.user.email = localStorage.email;
        state.user.phone = localStorage.phone;
        state.user.accessToken = localStorage.accessToken;
        state.user.refreshToken = localStorage.refreshToken;
        state.profile.nickname = localStorage.nickname;
        state.profile.avatarUrl = localStorage.avatarUrl;
      }
    },
    signOut(state) {
      localStorage.removeItem('id');
      localStorage.removeItem('clientId');
      localStorage.removeItem('username');
      localStorage.removeItem('email');
      localStorage.removeItem('phone');
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('nickname');
      localStorage.removeItem('avatarUrl');
      state.user.id = 0;
      state.user.clientId = null;
      state.user.username = null;
      state.user.email = null;
      state.user.phone = null;
      state.user.accessToken = null;
      state.user.refreshToken = null;
      state.profile.nickname = null;
      state.profile.avatarUrl = null;
    },
    setDrawer(state, payload) {
      state.drawer = payload;
    },
    toggleDrawer(state) {
      state.drawer = !state.drawer;
    },
    setTheme(state, payload) {
      state.dark = payload;
      state.logoUrl = state.dark ? '/assets/images/logo-dark.png' : '/assets/images/logo.png';
      localStorage.dark = payload;
      localStorage.logoUrl = payload ? '/assets/images/logo-dark.png' : '/assets/images/logo.png';
    },
    setLanguage(state, payload) {
      state.language = payload;
      localStorage.language = payload;
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    isSignedIn: (state) => (!((state.user.accessToken === undefined || state.user.accessToken === null || state.user.accessToken === ''))),
    accessToken: (state) => (state.user.accessToken ? state.user.accessToken : ''),
    accounts: (state) => state.accounts,
    userMenus: (state) => state.userMenus,
    user: (state) => state.user,
    profile: (state) => state.profile,
    links: (state) => state.links,
    menus: (state) => state.menus,
    logoUrl: (state) => state.logoUrl,
    dark: (state) => state.dark,
    language: (state) => state.language
  }
});
