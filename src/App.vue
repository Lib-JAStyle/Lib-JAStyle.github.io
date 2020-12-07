<template>
  <div>
    <div>
      <NavBar />
    </div>
    <div>
      <InformationBar v-bind:things="thing_count" v-bind:groups="group_count" />
      <div v-for="g in groups" v-bind:key="g.id">
        <GroupCard v-bind:id="g.id" />
      </div>
      <AddGroupCard />
    </div>
    <ThingDetail />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import GroupCard from './components/GroupCard.vue'
import ThingDetail from './components/ThingDetail.vue'
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

    this.groups = groups;
    this.thing_count = totalThings;
    this.group_count = groups.length;
  },
  components: {
    NavBar, GroupCard, AddGroupCard, ThingDetail, InformationBar
  },
  data: function() {
    return {
      groups: [],
      thing_count: 0,
      group_count: 0,
    }
  },
  mixins: [DBMixins]
}
</script>

<style>
</style>
