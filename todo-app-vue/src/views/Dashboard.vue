<template>
  <div class="dashboard">
    <h1 class="grey--text my-3 mx-7">Dashboard</h1>

    <v-container class="my-5">

      <v-layout row justify-start class="mb-5">
        <v-btn small depressed text class="mr-5" color="grey" @click="sortBy('title')">
          <v-icon small left>folder</v-icon>
          <span class="caption text-lowercase">By project name</span>
        </v-btn>
        <v-btn small depressed text color="grey" @click="sortBy('person')">
          <v-icon small left>person</v-icon>
          <span class="caption text-lowercase">By Person</span>
        </v-btn>
      </v-layout>


      <v-card flat v-for="project in projects" :key="project.title">
        <v-layout row wrap :class="`pa-3 project ${project.status}`">

          <v-flex xs12 md6>
            <div class="caption grey-text"> Project Title</div>
            <div>{{ project.title }}</div>
          </v-flex>

          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Person</div>
            <div>{{ project.person }}</div>
          </v-flex>

          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Due by</div>
            <div>{{project.due }}</div>
          </v-flex>

          <v-flex xs2 sm4 md2>
            <div class=" float-right">
              <v-chip :class="`${project.status} white--text caption my-2`">{{ project.status }}</v-chip>
            </div>
          </v-flex>


        </v-layout>
        <v-divider></v-divider>
      </v-card>
    </v-container>
  
  </div>
</template>

<script>

export default {
  data(){
    return{
      projects:[
        { title: 'Design a new website', person: 'The net Ninja', due: '1st Jan august 2019', status: 'ongoing'},
        { title: 'Create backend', person: 'Brad Traversy', due: '15st February 2019', status: 'complete'},
        { title: 'Design the delivery website', person: 'Dev ed', due: '22st March 2019', status: 'overdue'},
        { title: 'Create a react native app', person: 'Diego Rocketseat', due: '11st August 2019', status: 'ongoing'}
      ]
    }
  },
   methods: {
    sortBy(prop) {
      this.projects.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
    }
  }
};
</script>

<style>

.project.complete{
  border-left: 4px solid #E65100;
  
}

.project.ongoing{
  border-left: 4px solid #1E88E5;
}


.project.overdue{
  border-left: 4px solid #43A047;
}

.v-chip.complete{
  background: #E65100;
}

.v-chip.ongoing{
  background: #1E88E5;
}

.v-chip.overdue{
  background: #43A047;
}

</style>