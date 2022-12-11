<template>
  <v-navigation-drawer :mini-variant.sync="drawer" permanent app>
    <v-list-item class="px-2">
        <v-list-item-avatar color="blue">
          <span class="white--text text-h5">
            {{ project.displayName.substring(0, 1).toUpperCase() }}
          </span>
        </v-list-item-avatar>
        <v-list-item-title>{{ project.displayName }}</v-list-item-title>
        <v-btn icon @click.stop="drawer = !drawer">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>

      <v-list>
        <v-list-item :to="'/projects/' + project.id + '/overview'">
          <v-list-item-icon>
            <v-icon>mdi-chevron-left</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Overview</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item :to="'/projects/' + project.id + '/sprints/' + sprint.id">
          <v-list-item-icon>
            <v-icon>mdi-chevron-left</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Sprints</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-chevron-left</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Backlogs</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-chevron-left</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Work items</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
  </v-navigation-drawer>
</template>

<script>
// Utilities
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'CoreDrawer',
  props: ['menus', 'logoUrl'],
  data: () => ({
  }),
  computed: {
    ...mapGetters(['project', 'sprint']),
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
        return;
      }
      if (item.to || !item.href) return;
      this.$vuetify.goTo(item.href);
    }
  }
};
</script>
