<template>
  <div>
    test
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'Project',
  data: () => ({
    size: 12,
    page: 0,
    total: 0,
    projects: []
  }),
  created() {
    const projectId = this.$route.params.id;
    this.setProject({
      id: projectId
    });
  },
  methods: {
    ...mapMutations(['setProject'])
  }
};
</script>
