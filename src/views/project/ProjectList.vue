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
        <project-card :project="project"></project-card>
      </v-col>
    </v-row>
    <v-pagination
      v-model="page"
      :length="pages"
    ></v-pagination>
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
  computed: {
    pages: {
      get() {
        return Math.ceil(this.total / this.size);
      }
    }
  },
  watch: {
    page(val) {
      this.loadProjects(val);
    }
  },
  data: () => ({
    size: 12,
    page: 0,
    total: 0,
    projects: []
  }),
  mounted() {
    this.clearProject();
    this.loadProjects(1);
  },
  methods: {
    ...mapMutations(['clearProject']),
    loadProjects(currentPage) {
      getProjects({
        page: currentPage,
        size: this.size
      }).then((res) => {
        console.log(res);
        if (res.status === 200) {
          this.projects = res.data.items;
          this.page = res.data.pagination.page;
          this.total = res.data.pagination.total;
        }
      });
    }
  }
};
</script>
