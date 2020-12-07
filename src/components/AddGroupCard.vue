<template>
  <div class="card mt-3 ml-3" style="width: 20rem; height: 10rem;">
    <div class="card-header">
      <template v-if="showInput">
        <input type="text" v-model="groupName" />
        <button class="btn btn-outline-secondary ml-2" type="button" v-on:click="createGroup">ADD</button>
      </template>
      <template v-else>
        <button class="btn btn-outline-secondary" type="button" v-on:click="showAddGroupInput">+</button>
        <span class="ml-2">Add Group</span>
      </template>
    </div>
  </div>
</template>

<script>
import DBMixins from '../mixins/db.js'

export default {
  name: "AddGroupCard",
  data: function() {
    return {
      groupName: "",
      showInput: false,
    }
  },
  methods: {
    createGroup: function() {
      if (this.groupName == "") {
        alert("グループ名が入力されていません");
      }
      this.addGroup(this.groupName, 10);
      this.saveDB();

      this.showInput = !this.showInput;
    },
    showAddGroupInput: function() {
      this.showInput = !this.showInput;
    }
  },
  mixins: [DBMixins]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
