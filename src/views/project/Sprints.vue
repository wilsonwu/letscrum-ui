<template>
  <v-container>
    <v-row no-gutters>
      <v-col>
        <h2>Sprint 1</h2>
      </v-col>
      <v-col>
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on" plain tile large class="float-right">
              Sprint 1
              <v-icon right>
                mdi-chevron-down
              </v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item>
              <v-list-item-title>item</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col>
        <router-link to="taskboard">Board</router-link>
        <router-link to="capacity">Capi</router-link>
      </v-col>
    </v-row>
    <router-view></router-view>
  </v-container>
</template>

<script>
export default {
  name: 'ProjectSprints',
  data: () => ({
  }),
  computed: {
  },
  created() {
  },
  methods: {
  }
};
</script>
