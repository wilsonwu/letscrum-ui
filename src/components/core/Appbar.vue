<template>
  <v-app-bar app>
    <v-app-bar-nav-icon class="hidden-md-and-up" @click="toggleDrawer"></v-app-bar-nav-icon>
    <v-img
      :src="logoUrl"
      contain
      class="mr-5"
      width="110"
      max-width="110"
      @click="$vuetify.goTo(0)"
    />
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn
        text
        v-for="(menu, i) in menus"
        :key="i"
        :to="menu.path"
      >{{ $t('core.menus.' + menu.name + '.text') }}</v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <div v-if="!$store.getters.isSignedIn">
      <v-btn
        v-for="(account, i) in accounts"
        :key="i"
        :to="account.path"
        depressed
        class="hidden-sm-and-down ml-2"
      >{{ $t('core.accounts.' + account.name + '.text') }}</v-btn>
    </div>
    <core-account :accounts="accounts" v-if="!$store.getters.isSignedIn"></core-account>
    <user-menu :userMenus="userMenus" :user="user" v-else></user-menu>
  </v-app-bar>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  props: ['menus', 'logoUrl', 'accounts', 'userMenus', 'user'],
  components: {
    UserMenu: () => import('@/components/user/Menu.vue'),
    CoreAccount: () => import('@/components/core/Account.vue')
  },
  methods: {
    ...mapMutations(['toggleDrawer']),
    onDrawerChange(e, item) {
      e.stopPropagation();
      if (item.to || !item.href) return;
      this.$vuetify.goTo(item.href);
    }
  }
};
</script>
