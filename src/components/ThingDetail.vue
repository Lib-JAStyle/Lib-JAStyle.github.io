<template>
  <div id="exampleModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
            <input type="text" placeholder="商品名" v-model=name>
          </div>
          <div class="row mt-3 ml-2">
            <input type="text" placeholder="個数" v-model=count>
          </div>
          <div class="row mt-3 ml-2">
            <textarea placeholder="メモ" rows="5" cols="50" v-model=note></textarea>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" onClick="updateThingFromUI()">更新</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DBMixins from '../mixins/db.js'

export default {
  name: "ThingDetail",
  props: [ "groupid", "id" ],
  data: function() {
    return {
      name: "",
      count: 1,
      note: ""
    }
  },
  created: function() {
    if (this.id == undefined) {
      console.log("特にデータは指定されていません");
      return;
    }
    var thing = this.getThing(this.groupid, this.id);
    console.log("THING ID : " + thing.id);
    console.log("THING GROUP ID : " + thing.name);
    console.log("THING GROUP ID : " + thing.count);
  },
  mixins: [DBMixins]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
