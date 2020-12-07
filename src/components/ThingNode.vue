<template>
  <nav id="header" class="navbar navbar-expand bg-dark">
    <a class="navbar-brand" href="#">{{ title }}</a>

    <ui class="navbar-nav">
      <li class="nav-item" v-for="m in menu" v-bind:key="m.id">
        <a class="nav-link" v-bind:href=m.href v-on:click=m.onClick>{{ m.text }}</a>
      </li>
    </ui>
  </nav>
</template>

<script>
export default {
  data: function() {
    return {
      title: "所持品管理",
      menu: [
        { text: "所持品", href: "./things.html", onClick: null },
        { text: "保存", href: "#", onClick: "saveLocalStorage" },
        { text: "読み込み", href: "#", onClick: "loadLocalStorage" },
        { text: "リセット", href: "#", onClick: "resetLocalStorage" },
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
