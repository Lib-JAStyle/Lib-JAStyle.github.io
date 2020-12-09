<template>
  <div data-toggle="modal" v-on:click="updateThingContent">
    {{ name }}
  </div>
</template>

<script>
export default {
  name: "ThingNode",
  props: ["groupid", "id", "name"],
  created: function() {
  },
  methods: {
    updateThingContent: function() {
      this.$emit("onClickThing", this.id);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
