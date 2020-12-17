<template>
  <div class="bg">
    <div>
      <NavBar />
    </div>
    <div>
      <InformationBar class="ml-2 mt-3" v-bind:things="thing_count" v-bind:groups="group_count" />

      <div class="row">
        <div class="ml-2" v-for="g in groups" v-bind:key="g.id">
          <GroupCard v-bind:id="g.id" v-on:onClickThing="onClickThing" v-on:onUpdateGroup="onUpdateGroup" />
        </div>
        <div class="ml-2">
          <AddGroupCard v-on:onUpdateGroup="onUpdateGroup" />
        </div>
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

import {Group} from './models/Group.js'
import {Thing} from './models/Thing.js'

export default {
  name: 'App',
  created() {
    this.updateGroup();
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
    updateGroup: function() {
      this.groups = Group.all();
      this.thing_count = Thing.count();
      this.group_count = this.groups.length;
      this.thing = {
        name: "",
        count: 0,
        note: ""
      };
    },
    onUpdateGroup: function() {
      this.updateGroup();
    },
    onClickThing: function(groupId, thingId) {
      this.groupId = groupId;
      this.thing = Thing.find(t => { return t["group_id"] == groupId && t["id"] == thingId; });

      this.$modal.show("exampleModal");
    },
    onCloseThingDetail: function() {
      this.updateGroup();
      this.$modal.hide("exampleModal");
    }
  },
}
</script>

<style>
.bg {
  height: 1024px;
  background-image: url("~@/assets/background.jpg")
}
</style>
