<template>
  <div>
    <div>
      <NavBar />
    </div>
    <div @click="onClick()">
      <InformationBar v-bind:things="things" v-bind:groups="groups" />
      <GroupCard id=1 />
      <AddGroupCard />
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import GroupCard from './components/GroupCard.vue'
import AddGroupCard from './components/AddGroupCard.vue'
import InformationBar from './components/InformationBar.vue'
import DBMixins from './mixins/db.js'

export default {
  name: 'App',
  created() {
    this.loadDB();

    var groups = this.getUserGroups();
    var totalThings = 0;
    groups.forEach(g => {
      totalThings += g["things"].length;
    });

    this.things = totalThings;
    this.groups = groups.length;
  },
  components: {
    NavBar, GroupCard, AddGroupCard, InformationBar
  },
  data: function() {
    return {
      things: 0,
      groups: 0,
    }
  },
  mixins: [DBMixins]
}
</script>

<style>
</style>
