<template>
  <v-app>
    <core-appbar
      :menus="menus"
      :accounts="accounts"
      :userMenus="userMenus"
      :user="user"
    />
    <core-drawer :menus="menus" :logoUrl="logoUrl" />
    <v-main>
      <router-view></router-view>
    </v-main>
    <core-footer :links="links" :dark="dark" :language="language"/>
  </v-app>
</template>

<script>

import { mapGetters } from 'vuex';

export default {
  name: 'App',
  components: {
    CoreDrawer: () => import('@/components/core/Drawer.vue'),
    CoreAppbar: () => import('@/components/core/Appbar.vue'),
    CoreFooter: () => import('@/components/core/Footer.vue')
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
