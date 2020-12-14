<template>
  <modal name="exampleModal" :resizable="true" :height="400">
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel">モノの詳細</h5>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close" v-on:click="onClickCloseThing">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <div class="row ml-2">
        <input type="text" placeholder="商品名" v-model=thing.name>
      </div>
      <div class="row mt-3 ml-2">
        <input type="text" placeholder="個数" v-model=thing.count>
      </div>
      <div class="row mt-3 ml-2">
        <textarea placeholder="メモ" rows="5" cols="50" v-model=thing.note></textarea>
      </div>
      <div class="row mt-3 ml-2">
        <button type="button" class="btn btn-primary" v-on:click="onClickUpdateThing">更新</button>
        <button type="button" class="btn btn-danger ml-2" v-on:click="onClickRemoveThing">削除</button>
      </div>
    </div>
  </modal>
</template>

<script>
import DBMixins from '../mixins/db.js'

export default {
  name: "ThingDetail",
  props: [ "group_id", "thing" ],
  methods: {
    onClickUpdateThing: function() {
      this.loadDB();
      this.updateThing(this.group_id, this.thing);
      this.saveDB();

      alert("更新が完了しました");
      this.$emit("onCloseThingDetail");
    },
    onClickCloseThing: function() {
      this.$modal.hide("exampleModal");
    },
    onClickRemoveThing: function() {
      this.loadDB();
      this.removeThing(this.group_id, this.thing.id);
      this.saveDB();

      alert("削除が完了しました");
      this.$emit("onCloseThingDetail");
    }
  },
  mixins: [DBMixins]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
