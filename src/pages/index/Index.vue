<template>
  <div class="index-base">
    <div class="index">
      <index-nav class="nav"></index-nav>
      <index-main class="main" @showModal="handleMainShowModal" :appLists="appLists"></index-main>
    </div>
    <index-modal class="modal" v-show="showModal" @showModal="handleShowModal"></index-modal>
    <div id="hide" :class="{'modal-backdrop': showModal}"></div>
  </div>
</template>

<script>
import IndexNav from "./components/Nav";
import IndexMain from "./components/Main";
import IndexModal from "./components/Modal";
import axios from "axios";
import Qs from "qs";
export default {
  name: "Index",
  components: {
    IndexNav,
    IndexMain,
    IndexModal
  },
  data() {
    return {
      showModal: false,
      appLists: []
    };
  },
  methods: {
    handleMainShowModal(showModal) {
      this.showModal = showModal;
    },
    handleShowModal(showModal) {
      this.showModal = showModal;
    },
    getAppList() {
      let params = { userId: localStorage.userId };
      axios
        .post("/api/application/getApplications", Qs.stringify(params))
        .then(this.handlePostDataSucc);
    },
    handlePostDataSucc(res) {
      res = res.data;
      console.log(res);
      if (res.code === 0) {
        this.appLists = res.data;
      } else {
        this.$layer.msg(res.msg);
      }
    }
  },
  mounted() {
    this.getAppList();
  }
};
</script>

<style lang="stylus" scoped>
.index-base {
  height: 100%;

  .index {
    height: 100%;
    overflow: hidden;

    .nav {
      height: 100%;
      width: 60px;
      background: #272b31;
      display: inline-block;
      vertical-align: top;
    }

    .main {
      width: calc(100% - 180px);
      font-size: 16px;
      vertical-align: top;
      padding: 2%;
      display: inline-block;
    }
  }

  .modal {
    width: 500px;
    position: fixed;
    top: 25%;
    left: 30%;
    opacity: 1;
    z-index: 11;
    background: #fff;
    border: 1px solid #e6e6e6;
    border-radius: 6px;
    // display: none;
  }

  .modal-backdrop {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 10;
    background-color: #000;
    opacity: 0.5;
  }
}
</style>

