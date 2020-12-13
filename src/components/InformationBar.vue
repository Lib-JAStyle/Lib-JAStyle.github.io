<template>
  <ul id="info" class="row list-group list-group-horizontal">
    <li class="col-2 list-group-item test">モノの数 : {{ things }}</li>
    <li class="col-2 list-group-item test">グループの数 : {{ groups }}</li>
  </ul>
</template>

<script>
export default {
  name: "InformationBar",
  props: ['things', 'groups'],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.test {
  opacity: 0.6;
}
</style>
