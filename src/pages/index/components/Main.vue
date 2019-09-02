<template>
  <div>
    <div class="main">
      <div class="main-top">
        <button class="btn-create" @click="createApp">+ 创建应用</button>
        <div class="user-msg">
          <img src="~styles/icon/people_fill.png" />
          <p class="name">{{ user }}</p>
          <p class="logout" @click="logout">登出</p>
        </div>
      </div>
      <div class="main-list">
        <div
          class="list"
          v-for="(item, i) of appLists"
          :key="i"
          @click="handleListClick(item)"
        >
          <img class="list-img" src="~styles/icon/people.png" />
          <h4 class="list-name">{{ item.name }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexMain",
  props: {
    appLists: Array
  },
  data() {
    return {
      showModal: false,
      user: localStorage.user
    };
  },
  methods: {
    createApp() {
      this.showModal = true;
      this.$emit("showModal", this.showModal);
    },
    logout() {
      localStorage.login = 0;
      this.$router.push("/");
    },
    getLoginInfo() {
      if (localStorage.login == 0) {
        this.$router.push("/");
      }
    },
    handleListClick(item) {
      this.$router.push("/detail/" + item.id);
    }
  },
  mounted() {
    this.getLoginInfo()
  }
};
</script>

<style lang="stylus" scoped>
.main-top {
  width: 100%;

  .btn-create {
    width: 200px;
    height: 40px;
    font-family: '微软雅黑';
    font-size: 16px;
    text-align: center;
    margin-bottom: 1.5%;
    background: #3593ff;
    border-radius: 2px;
    color: #fff;
    padding: 0;
    border: 1px solid transparent;
    outline: none;
    cursor: pointer;
  }

  .user-msg {
    width: 265px;
    height: 40px;
    float: right;
    text-align: center;
    font-size: 14px;
    margin-bottom: 1.4%;
    line-height: 40px;
    border: 1px solid #e6e6e6;
    border-radius: 2px;
    background: #fff;
    color: #646464;

    img {
      width: 20px;
      vertical-align: middle;
      display: inline-block;
    }

    .name {
      width: 150px;
      display: inline-block;
      vertical-align: middle;
    }

    .logout {
      width: 50px;
      display: inline-block;
      vertical-align: middle;
      cursor: pointer;
    }
  }
}

.main-list {
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  height: 800px;

  .list {
    border: 1px solid #e6e6e6;
    border-radius: 6px;
    background: #fff;
    margin: 20px;
  }

  .list:hover {
    color: #3593ff;
    box-shadow: 2px 2px 10px #646464;
    cursor: pointer;
  }

  .list-img {
    margin: 20px;
    vertical-align: middle;
  }

  .list-name {
    display: inline-block;
    vertical-align: middle;
    font-size: 14px;
    font-family: '微软雅黑';
    width: 180px;
    overflow: hidden;
  }
}
</style>
