<template>
  <v-navigation-drawer v-model="drawer" app temporary>
    <v-list>
      <v-list-item-group>
        <v-list-item v-for="menu in menus" :key="menu.name" :to="menu.path">
          <v-list-item-content>
            <v-list-item-title>{{ $t('core.menus.' + menu.name + '.text') }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
// Utilities
import { mapMutations } from 'vuex';

export default {
  name: 'CoreDrawer',
  props: ['menus'],
  computed: {
    drawer: {
      get() {
        return this.$store.state.drawer;
      },
      set(val) {
        this.setDrawer(val);
      }
    }
  },
  methods: {
    ...mapMutations(['setDrawer']),
    onClick(e, item) {
      e.stopPropagation();
      if (item.to === '/') {
        this.$vuetify.goTo(0);
        this.setDrawer(false);
        return;
      }
      if (item.to || !item.href) return;
      this.$vuetify.goTo(item.href);
      this.setDrawer(false);
    }
  }
};
</script>
