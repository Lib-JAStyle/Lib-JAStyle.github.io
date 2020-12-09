<template>
  <!-- <div id="exampleModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="false"> -->
  <div>
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">モノの詳細</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
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
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" v-on:click="onClickUpdateThing">更新</button>
        </div>
      </div>
    </div>
  </div>
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

      this.$emit("onCloseThingDetail");
    }
  },
  mixins: [DBMixins]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
