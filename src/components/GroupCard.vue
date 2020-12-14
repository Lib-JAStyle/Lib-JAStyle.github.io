<template>
  <div v-bind:id="'group-card-' + id" class="card mt-3 ml-3" style="width: 20rem;">
    <div v-bind:id="'group-header-' + id" class="card-header alert alert-success">
      <nav class="navbar navbar-light">
        <h5 data-toggle="collapse" v-bind:data-target="'#group-body-' + id">{{ name }} ({{ total }})</h5>
        <button class="dropdown-toggle" type="button" data-toggle="dropdown" v-bind:data-target="'group-header-' + id">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="dropdown-menu" v-bind:id="'group-header-menu-' + id">
          <a class="dropdown-item" href="#">Edit</a>
          <a class="dropdown-item" href="#" v-on:click="onClickRemoveGroup">Delete</a>
        </div>
      </nav>
    </div>

    <div v-bind:id="'group-body-' + id" class="card-body collapse">
      <ul class="list-group">
        <li class="list-group-item" v-for="t in things" v-bind:key="t.id">
          <ThingNode v-bind:id="t.id" v-bind:groupid="id" v-bind:name="t.name" v-on:onClickThing="onClickThing" />
        </li>
      </ul>
    </div>

    <div v-bind:id="'group-footer-' + id" class="card-footer input-group">
      <input type="text" class="form-control" v-model="thing_name">
      <div class="input-group-append">
        <button class="btn btn-outline-secondary" type="button" v-on:click="onClickAddThing">Add</button>
      </div>
    </div>
  </div>
</template>

<script>
import ThingNode from "./ThingNode.vue"
import DBMixins from '../mixins/db.js'

export default {
  name: "GroupCard",
  components: {
    ThingNode
  },
  props: ["id"],
  created() {
    this.loadDB();

    var group = this.getGroup(this.id);
    this.name = group.name;
    this.total = group.things.length;
    this.things = group.things;
  },
  data: function() {
    return {
      name: "",
      total: 0,
      things: [],
      thing_name: ""
    }
  },
  methods: {
    onClickAddThing: function() {
      if (this.thing_name == "") {
        alert("モノの名前が入力されていません");
        return;
      }
      this.addThing(this.id, this.thing_name, 1);
      this.saveDB();

      ++this.total;
      this.thing_name = "";
    },
    onClickRemoveGroup: function() {
      this.removeGroup(this.id);
      this.saveDB();
    },
    onClickThing: function(thingId) {
      this.$emit("onClickThing", this.id, thingId);
    }
  },
  mixins: [DBMixins]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
