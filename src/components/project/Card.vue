<template>
  <v-card
    class="mx-auto"
    outlined
    :to="'/project/' + project.name"
    tile
  >
    <v-list-item three-line>
      <v-list-item-avatar
        tile
        size="80"
        color="grey"
      ></v-list-item-avatar>
      <v-list-item-content>
        <div class="text-overline mb-4">
          {{ project.members.length }} Members
        </div>
        <v-list-item-title class="text-h5 mb-1">
          {{ project.displayName }}
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: ['project'],
  methods: {
  }
};
</script>
