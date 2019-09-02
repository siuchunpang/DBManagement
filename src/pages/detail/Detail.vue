<template>
  <div class="detail-base">
    <detail-nav></detail-nav>
    <detail-mainleft :appLists="appLists"></detail-mainleft>
  </div>
</template>

<script>
import DetailNav from "./components/Nav";
import DetailMainleft from "./components/MainLeft";
import axios from "axios";
import Qs from "qs";
export default {
  name: "Detail",
  components: {
    DetailNav,
    DetailMainleft
  },
  data() {
    return {
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
}
</style>

