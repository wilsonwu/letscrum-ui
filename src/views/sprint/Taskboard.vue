<template>
  <div>
    <v-tabs>
      <v-tab to="taskboard">Taskboard</v-tab>
      <v-tab to="backlog">Backlog</v-tab>
      <v-tab to="capacity">Capacity</v-tab>
      <v-divider
        vertical
        inset
        class="mx-2"
      ></v-divider>
      <v-spacer></v-spacer>
      <v-menu offset-y bottom right>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" tile icon small style="margin-top: 10px;">
            <v-icon>
              mdi-dots-horizontal
            </v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item dense @click="console.log()">
            <v-list-item-icon class="mr-2">
              <v-icon>
                mdi-account-multiple-plus
              </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Add all project members</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item dense @click="console.log()">
            <v-list-item-icon class="mr-2">
              <v-icon>
                mdi-account-arrow-right
              </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Add all members from last sprint</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-spacer></v-spacer>
      <v-menu offset-y bottom left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" tile icon small style="margin-top: 10px;">
            <v-icon>
              mdi-order-bool-ascending
            </v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item dense>
            <v-list-item-subtitle>Side Panel</v-list-item-subtitle>
          </v-list-item>
          <v-list-item dense @click="console.log()">
            <v-list-item-icon class="mr-2">
              <v-icon>
                mdi-account-multiple-plus
              </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Add all project members</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item dense @click="console.log()">
            <v-list-item-icon class="mr-2">
              <v-icon>
                mdi-account-arrow-right
              </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Add all members from last sprint</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-tabs>
    <v-divider></v-divider>
    <v-row no-gutters>
      <v-col>
        <v-simple-table fixed-header height="100%">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left" style="width: 19%;">
                  <v-btn tile text x-small v-if="collapse">
                    <v-icon left>
                      mdi-arrow-expand-vertical
                    </v-icon>
                    Expand all
                  </v-btn>
                  <v-btn tile text x-small v-else>
                    <v-icon left>
                      mdi-arrow-collapse-vertical
                    </v-icon>
                    Collapse all
                  </v-btn>
                </th>
                <th class="text-left" style="width: 27%;">
                  To Do
                </th>
                <th class="text-left" style="width: 27%;">
                  In Progress
                </th>
                <th class="text-left" style="width: 27%;">
                  Done
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="item in workitems"
                :key="item.id"
              >
                <td>
                  <v-sheet tile outlined class="ma-2"
                  style="border-left-color: rgba(0, 103, 181, 1); border-left-width: 8px;"
                  min-width="200" max-width="200" height="120">
                    Test
                  </v-sheet>
                </td>
                <td>
                  <div v-for="task in item.tasks" :key="task.name">
                  <v-sheet tile outlined class="ma-2" v-if="task.name === '1'"
                    style="border-left-color: rgb(242, 203, 29); border-left-width: 8px;"
                    min-width="185"
                    height="120"
                    max-width="185">
                      Test
                  </v-sheet>
                  </div>
                  <v-btn tile text small class="mx-2">
                    <v-icon left>
                      mdi-plus
                    </v-icon>
                    New task
                  </v-btn>
                </td>
                <td>
                  <div v-for="task in item.tasks" :key="task.name">
                  <v-sheet tile outlined class="ma-2" v-if="task.name === '2'"
                    style="border-left-color: rgb(242, 203, 29); border-left-width: 8px;"
                    min-width="185"
                    height="120"
                    max-width="185">
                      Test
                  </v-sheet>
                  </div>
                </td>
                <td>
                  <div v-for="task in item.tasks" :key="task.name">
                  <v-sheet tile outlined class="ma-2" v-if="task.name === '3'"
                    style="border-left-color: rgb(242, 203, 29); border-left-width: 8px;"
                    min-width="185"
                    height="120"
                    max-width="185">
                      Test
                  </v-sheet>
                  </div>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
      <v-col v-if="workDetail" cols="3">
        <v-card flat tile>
          <v-card-title>
            <span class="text-h5">Work Details</span>
            <v-spacer></v-spacer>
            <v-btn icon @click="workDetail = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-card-title>
          <v-card-text>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  data: () => ({
    workDetail: true,
    workitems: [{
      name: 123,
      tasks: [{
        name: '1'
      },
      {
        name: '3'
      },
      {
        name: '2'
      },
      {
        name: '2'
      },
      {
        name: '2'
      },
      {
        name: '2'
      },
      {
        name: '2'
      }]
    },
    {
      name: 123
    },
    {
      name: 123
    },
    {
      name: 123
    },
    {
      name: 123
    },
    {
      name: 123
    },
    {
      name: 123
    },
    {
      name: 123
    }],
    collapse: false
  })
};
</script>
