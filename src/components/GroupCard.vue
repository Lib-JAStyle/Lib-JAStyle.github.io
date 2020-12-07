<template>
  <div v-bind:id="'group-card-' + id" class="card mt-3 ml-3" style="width: 20rem;">
    <div v-bind:id="'group-header-' + id" class="card-header alert alert-success">
      <nav class="navbar navbar-light">
        <h5 data-toggle="collapse" v-bind:data-target="'#group-header-menu-' + id">{{ name }} ({{ total }})</h5>
        <button class="dropdown-toggle" type="button" data-toggle="dropdown" v-bind:data-target="'group-header-' + id">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="dropdown-menu" v-bind:id="'group-header-menu-' + id">
          <a class="dropdown-item" href="#">Edit</a>
          <a class="dropdown-item" href="#" v-on:click="removeGroup">Delete</a>
        </div>
      </nav>
    </div>

    <div v-bind:id="'group-body-' + id" class="card-body collapse">
      <ul class="list-group">
        <ThingNode />
      </ul>
    </div>

    <div v-bind:id="'group-footer-' + id" class="card-footer input-group">
      <input type="text" class="form-control">
      <div class="input-group-append">
        <button class="btn btn-outline-secondary" type="button" v-on:click="addThing">Add</button>
      </div>
    </div>
  </div>
</template>

<script>
import ThingNode from "./ThingNode.vue"

export default {
  name: "GroupCard",
  components: {
    ThingNode
  },
  props: ["id"],
  created() {
  },
  data: function() {
    return {
      name: "Test",
      total: 10
    }
  },
  methods: {
    addThing: function() {
      alert(this.id);
    },
    removeGroup: function() {
      alert(this.id);
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
