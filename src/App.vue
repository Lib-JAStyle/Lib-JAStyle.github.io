<template>
  <div class="bg">
    <div>
      <NavBar />
    </div>
    <div>
      <InformationBar class="ml-2 mt-3" v-bind:things="thing_count" v-bind:groups="group_count" />

      <div class="row">
        <div class="ml-2" v-for="g in groups" v-bind:key="g.id">
          <GroupCard v-bind:id="g.id" v-on:onClickThing="onClickThing" />
        </div>
        <AddGroupCard />
      </div>
    </div>

    <ThingDetail v-bind:group_id="groupId" v-bind:thing="thing" v-on:onCloseThingDetail="onCloseThingDetail" />
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

    this.thing = {
      name: "",
      count: 0,
      note: ""
    };
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
      thing: null,
      groupId: null,
    }
  },
  methods: {
    onClickThing: function(groupId, thingId) {
      this.groupId = groupId;
      this.thing = this.getThing(groupId, thingId);

      this.$modal.show("exampleModal");
    },
    onCloseThingDetail: function() {
      alert("更新が完了しました");
      this.$modal.hide("exampleModal");
    }
  },
  mixins: [DBMixins]
}
</script>

<style>
.bg {
  height: 1024px;
  background-image: url("~@/assets/background.jpg")
}
</style>
