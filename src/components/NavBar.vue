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
export default {
  name: "NavBar",
  data: function() {
    return {
      title: "所持品管理",
      menu: [
        { text: "リセット", href: "#", onClick: this.resetLocalStorage },
      ]
    }
  },
  methods: {
    resetLocalStorage: function() {
      alert("データを削除しました");
      localStorage.clear();
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
