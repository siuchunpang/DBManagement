<template>
  <div>
    <div id="nav" class="nav">
      <ul class="nav-ul">
        <li>
          <div class="nav-app">
            <img class="nav-app-img" src="~styles/icon/application.png" alt="应用" />
            <p class="nav-app-name">应用</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexNav"
};
</script>

<style lang="stylus" scoped>
.nav-ul {
  width: 100%;
  list-style: none;
  text-align: center;
  background: rgb(53, 147, 255);
  margin: 0;

  .nav-app {
    vertical-align: middle;
    padding: 10%;

    .nav-app-name {
      color: #fff;
      font-size: 13px;
    }

    .nav-app-img {
      width: 26px;
      margin-top: 3px;
      margin-bottom: 3px;
    }
  }
}
</style>
