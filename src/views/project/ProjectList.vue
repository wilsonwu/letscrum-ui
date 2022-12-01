<template>
  <v-container>
    <v-row no-gutters>
      <v-col>
        <h2 class="pa-1">Project List</h2>
      </v-col>
      <v-col>
        <v-btn outlined class="float-right ma-1" tile>
          <v-icon left>
            mdi-plus
          </v-icon>
          New Project
        </v-btn>
      </v-col>
    </v-row>
    <v-divider class="my-1"></v-divider>
    <v-row no-gutters>
      <v-col cols="12" md="4" class="pa-1" v-for="i in 10" :key="i">
        <project-card
          @click="setProject({ id: 1, name: '123', displayName: '333' })"
        ></project-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapMutations } from 'vuex';
import { getProjects } from '@/apis/project';

export default {
  name: 'App',
  components: {
    ProjectCard: () => import('@/components/project/Card.vue')
  },
  computed: {},
  mounted() {
    this.clearProject();
    getProjects().then((res) => {
      console.log(res);
    });
  },
  methods: {
    ...mapMutations(['setProject', 'clearProject'])
  }
};
</script>
