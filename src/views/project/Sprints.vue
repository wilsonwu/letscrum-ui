<template>
  <v-container>
    <v-row no-gutters>
      <v-col>
        <h2>Sprint 1</h2>
      </v-col>
      <v-col>
        <v-menu offset-y bottom left min-width="300">
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on" plain tile large class="float-right">
              Sprint 1
              <v-icon right>
                mdi-chevron-down
              </v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-dialog v-model="dialog" persistent max-width="600">
              <template v-slot:activator="{ on, attrs }">
                <v-list-item v-bind="attrs" v-on="on">
                  <v-list-item-icon>
                    <v-icon>mdi-plus</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>New Sprint</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </template>
              <v-card>
                <v-card-title>
                  <span class="text-h5">Create Sprint</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12">
                        <v-text-field
                          label="Name"
                          required
                          v-model="sprint.name"
                        ></v-text-field>
                      </v-col>

                        <v-menu
                          ref="menu"
                          v-model="menu"
                          :close-on-content-click="false"
                          :return-value.sync="date"
                          transition="scale-transition"
                          offset-y
                          min-width="auto"
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <v-col cols="6">
                              <v-text-field
                                v-model="startDate"
                                label="Picker in menu"
                                readonly
                                v-bind="attrs"
                                v-on="on"
                              ></v-text-field>
                            </v-col>
                            <v-col cols="6">
                              <v-text-field
                                v-model="endDate"
                                label="Picker in menu"
                                readonly
                                v-bind="attrs"
                                v-on="on"
                              ></v-text-field>
                            </v-col>
                          </template>
                          <v-date-picker
                            v-model="date"
                            no-title
                            scrollable
                            range
                          >
                            <v-spacer></v-spacer>
                            <v-btn
                              text
                              color="primary"
                              @click="menu = false"
                            >
                              Cancel
                            </v-btn>
                            <v-btn
                              text
                              color="primary"
                              @click="$refs.menu.save(date)"
                            >
                              OK
                            </v-btn>
                          </v-date-picker>
                        </v-menu>
                    </v-row>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn text @click="dialog = false">
                    Close
                  </v-btn>
                  <v-btn text>
                    Create
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-list>
          <v-list>
            <v-virtual-scroll height="350" item-height="64" :items="sprints">
              <template v-slot:default="{ item }">
                <v-list-item two-line @click="console.log('456')">
                  <v-list-item-content>
                    <v-list-item-title>{{ item.name }}</v-list-item-title>
                    <v-list-item-subtitle>2021-10-30 - 2021-11-15</v-list-item-subtitle>
                  </v-list-item-content>
                  <v-list-item-action>
                    <v-list-item-action-text>
                      <v-chip
                        color="primary"
                        small
                      >
                        Current
                      </v-chip>
                    </v-list-item-action-text>
                  </v-list-item-action>
                </v-list-item>
              </template>
            </v-virtual-scroll>
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
    date: [],
    startDate: null,
    endDate: null,
    menu: false,
    dialog: false,
    sprint: {
      name: null
    },
    sprints: [{
      name: '123'
    },
    {
      name: '123'
    },
    {
      name: '123'
    },
    {
      name: '123'
    },
    {
      name: '123'
    },
    {
      name: '123'
    }]
  }),
  watch: {
    date(val) {
      console.log(val);
      if (val[0] > val[1]) {
        const temp = val[0];
        // eslint-disable-next-line prefer-destructuring, no-param-reassign
        val[0] = val[1];
        // eslint-disable-next-line no-param-reassign
        val[1] = temp;
      }
      // eslint-disable-next-line prefer-destructuring
      this.startDate = val[1];
      // eslint-disable-next-line prefer-destructuring
      this.endDate = val[0];
    }
  },
  computed: {
  },
  created() {
  },
  methods: {
  }
};
</script>
