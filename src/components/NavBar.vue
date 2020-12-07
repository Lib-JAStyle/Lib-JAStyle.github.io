<template>
  <nav id="header" class="navbar navbar-expand bg-dark">
    <a class="navbar-brand" href="#">{{ title }}</a>

    <ul class="navbar-nav">
      <li class="nav-item" v-for="m in menu" v-bind:key="m.id">
        <a class="nav-link" v-bind:href="m.href" v-on:click="m.onClick">{{ m.text }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
import DBMixins from '../mixins/db.js'

export default {
  name: "NavBar",
  data: function() {
    return {
      title: "所持品管理",
      menu: [
        { text: "所持品", href: "./things.html", onClick: this.dummy },
        { text: "保存", href: "#", onClick: this.saveLocalStorage },
        { text: "読み込み", href: "#", onClick: this.loadLocalStorage },
        { text: "リセット", href: "#", onClick: this.resetLocalStorage },
      ]
    }
  },
  methods: {
    dummy: function() {
    },
    saveLocalStorage: function() {
      this.saveDB();
      alert("データを保存しました");
    },
    loadLocalStorage: function() {
      this.loadDB();
      alert("データを読み込みました");
    },
    resetLocalStorage: function() {
      this.clearDB();
      alert("データを削除しました");
    }
  },
  mixins: [DBMixins]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
