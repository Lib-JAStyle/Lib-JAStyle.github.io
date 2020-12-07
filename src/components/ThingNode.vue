<template>
  <div data-toggle="modal" v-bind:data-target="target" v-on:click="updateThingContent">
    {{ name }}
  </div>
</template>

<script>
export default {
  name: "ThingNode",
  props: [ "groupid", "id", "name", "target" ],
  created: function() {
  },
  methods: {
    updateThingContent: function() {
      // ウィンドウを開くように、親コンポーネントへの通知が必要
      alert(this.id);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
