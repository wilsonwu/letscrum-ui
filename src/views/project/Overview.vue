<template>
  <v-container>
  <v-row no-gutters>
    <v-col>
      <h2 class="pa-1">{{ project.name }}</h2>
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
      <project-card :project="project"></project-card>
    </v-col>
  </v-row>
  </v-container>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
import { getGetProject } from '@/apis/project';

export default {
  name: 'Project',
  data: () => ({
    size: 12,
    page: 0,
    total: 0,
    projects: []
  }),
  computed: {
    ...mapGetters(['project'])
  },
  created() {
    this.loadProject();
  },
  methods: {
    ...mapMutations(['setProject']),
    loadProject() {
      getGetProject(this.$route.params.id).then((res) => {
        console.log(res);
        if (res.status === 200) {
          this.setProject({
            id: res.data.item.id,
            name: res.data.item.name,
            displayName: res.data.item.displayName
          });
        }
      });
    }
  }
};
</script>
