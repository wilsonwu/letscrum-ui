<template>
  <v-app-bar app dense flat>
    <v-img
      :src="logoUrl"
      contain
      class="mr-5"
      width="110"
      max-width="110"
    />
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn
        text
        v-for="(menu, i) in menus"
        :key="i"
        :to="menu.path"
      >{{ $t('core.menus.' + menu.name + '.text') }}</v-btn>
    </v-toolbar-items>
    <v-breadcrumbs :items="breadcrumbs">
      <template v-slot:item="{ item }">
        <v-breadcrumbs-item>
          <v-btn plain small tile :to="item.href" :disabled="item.disabled">
            {{ item.text.toUpperCase() }}
          </v-btn>
        </v-breadcrumbs-item>
      </template>
    </v-breadcrumbs>
    <v-spacer></v-spacer>
    <!-- <v-text-field
      hide-details
      single-line
      dense
      placeholder="Search"
      append-outer-icon="mdi-magnify"
      @click:append-outer="{}"
      class="mr-2"
    ></v-text-field>
    <v-divider
      vertical
      inset
      class="mx-1"
    ></v-divider> -->
    <v-btn text="" rounded @click="changeLanguage">{{ $t('core.toLanguage') }}</v-btn>
    <v-btn icon @click="changeTheme">
      <v-icon>mdi-theme-light-dark</v-icon>
    </v-btn>
    <v-divider
      vertical
      inset
      class="mx-1"
    ></v-divider>
    <core-account :accounts="accounts" v-if="!isSignedIn"></core-account>
    <user-menu :userMenus="userMenus" :user="user" v-else></user-menu>
    <div v-if="!isSignedIn">
      <v-btn
        v-for="(account, i) in accounts"
        :key="i"
        :to="account.path"
        depressed
        class="hidden-sm-and-down ml-2"
      >{{ $t('core.accounts.' + account.name + '.text') }}</v-btn>
    </div>
  </v-app-bar>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  props: ['menus', 'logoUrl', 'accounts', 'userMenus', 'user', 'dark', 'language'],
  components: {
    UserMenu: () => import('@/components/user/Menu.vue'),
    CoreAccount: () => import('@/components/core/Account.vue')
  },
  computed: {
    ...mapGetters(['breadcrumbs', 'isSignedIn'])
  },
  methods: {
    ...mapMutations(['toggleDrawer', 'setTheme', 'setLanguage']),
    onDrawerChange(e, item) {
      e.stopPropagation();
      if (item.to || !item.href) return;
      this.$vuetify.goTo(item.href);
    },
    changeTheme() {
      this.$vuetify.theme.dark = !this.dark;
      this.setTheme(this.$vuetify.theme.dark);
    },
    changeLanguage() {
      if (this.language === 'cn') {
        this.setLanguage('en');
      }
      else {
        this.setLanguage('cn');
      }
      // eslint-disable-next-line no-restricted-globals
      location.reload();
    }
  }
};
</script>
