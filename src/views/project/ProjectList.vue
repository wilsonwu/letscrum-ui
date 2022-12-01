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
      <v-col cols="12" md="4" class="pa-1" v-for="(project, i) in projects" :key="i">
        <project-card
          :project="project"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapMutations } from 'vuex';
import { getProjects } from '@/apis/project';

export default {
  name: 'ProjectList',
  components: {
    ProjectCard: () => import('@/components/project/Card.vue')
  },
  computed: {},
  data: () => ({
    projects: []
  }),
  mounted() {
    this.clearProject();
    getProjects().then((res) => {
      console.log(res);
      if (res.status === 200) {
        this.projects = res.data.items;
      }
    });
  },
  methods: {
    ...mapMutations(['clearProject'])
  }
};
</script>
