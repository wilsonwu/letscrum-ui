<template>
  <v-app>
    <core-appbar
      :menus="menus"
      :accounts="accounts"
      :userMenus="userMenus"
      :user="user"
      :dark="dark"
      :language="language"
      :logoUrl="logoUrl"
    />
    <core-drawer v-if="$store.getters.isSignedIn && $store.getters.project.id > 0" :menus="menus" />
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

import { mapGetters } from 'vuex';

export default {
  name: 'App',
  components: {
    CoreDrawer: () => import('@/components/core/Drawer.vue'),
    CoreAppbar: () => import('@/components/core/Appbar.vue')
  },
  computed: {
    ...mapGetters([
      'menus',
      'logoUrl',
      'links',
      'dark',
      'language',
      'accounts',
      'userMenus',
      'user'
    ])
  }
};
</script>
<style>
.countFont {
  font-size: 11px;
}
</style>
