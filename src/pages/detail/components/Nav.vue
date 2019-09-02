<template>
  <div class="nav">
    <ul>
      <li class="back">
        <router-link to="/index">
          <img class="back-img" src="~styles/icon/left_arrow.png" alt="返回首页" />
        </router-link>
      </li>
      <li class="menu">
        <div class="menu-list">
          <img class="menu-list-img" src="~styles/icon/data.png" alt="应用" />
          <p class="menu-list-name">数据</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "DetailNav"
};
</script>

<style lang="stylus" scoped>
.nav {
  height: 100%;
  width: 60px;
  background: #272b31;
  display: inline-block;
  vertical-align: top;

  .back {
    list-style: none;
    text-align: center;

    .back-img {
      width: 26px;
      margin-top: 3px;
      margin-bottom: 3px;
      padding: 10px 0;
    }
  }

  .menu {
    width: 100%;
    list-style: none;
    text-align: center;
    background: rgb(53, 147, 255);
    margin: 0;

    .menu-list {
      vertical-align: middle;
      padding: 10%;

      .menu-list-img {
        width: 26px;
        margin-top: 3px;
        margin-bottom: 3px;
      }

      .menu-list-name {
        color: #fff;
        font-size: 13px;
        margin-bottom: 0;
      }
    }
  }
}
</style>
