<template>
  <div class="detail-base">
    <detail-nav></detail-nav>
    <detail-mainleft :appLists="appLists" @showModal="handleShowModal"></detail-mainleft>
    <detail-modal v-show="showModal" @showModal="handleShowModal"></detail-modal>
    <div id="hide" :class="{'modal-backdrop': showModal}"></div>
  </div>
</template>

<script>
import DetailNav from "./components/Nav";
import DetailMainleft from "./components/MainLeft";
import DetailModal from "./components/Modal";
import axios from "axios";
import Qs from "qs";
export default {
  name: "Detail",
  components: {
    DetailNav,
    DetailMainleft,
    DetailModal
  },
  data() {
    return {
      showModal: false,
      appLists: []
    };
  },
  methods: {
    getAppList() {
      let params = { userId: localStorage.userId };
      axios
        .post("/api/application/getApplications", Qs.stringify(params))
        .then(res => {
          res = res.data;
          if (res.code === 0) {
            this.appLists = res.data;
            console.log(this.appLists);
          } else {
            this.$layer.msg(res.msg);
          }
        });
    },
    handleShowModal(showModal) {
      this.showModal = showModal;
    }
  },
  mounted() {
    this.getAppList();
  }
};
</script>

<style lang="stylus" scoped>
.detail-base {
  height: 100%;

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

