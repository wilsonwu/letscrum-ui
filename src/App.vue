<template>
  <v-app>
    <core-appbar
      :menus="menus"
      :logoUrl="logoUrl"
      :accounts="accounts"
      :userMenus="userMenus"
      :user="user"
    />
    <core-drawer :menus="menus" />
    <v-main class="content">
      <router-view></router-view>
      <help :show="showHelp"></help>
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
    CoreFooter: () => import('@/components/core/Footer.vue'),
    Help: () => import('@/components/Help.vue')
  },
  data: () => ({
    showHelp: false
  }),
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
.content {
  width: 1260px;
  margin: auto;
}
</style>
