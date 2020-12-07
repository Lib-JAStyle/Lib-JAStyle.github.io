<template>
  <div data-toggle="modal" v-bind:data-target="data-target" v-on:click="updateThingContent">
    {{ name }}
  </div>
</template>

<script>
export default {
  name: "ThingNode",
  props: [ "group-id", "id", "name", "data-target" ],
  methods: {
    updateThingContent: function() {
      alert(this.id);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
