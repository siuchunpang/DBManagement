<template>
  <div class="detail-base">
    <detail-nav></detail-nav>
    <detail-main
      :appLists="appLists"
      @showModal="handleShowModal"
      @showTable="handleShowTable"
      @tableId="getTableId"
    ></detail-main>
    <detail-modal v-show="showModal" @showModal="handleShowModal"></detail-modal>
    <div id="hide" :class="{'modal-backdrop': showModal}"></div>
    <detail-table v-show="showTable" :fieldList="fieldList"></detail-table>
  </div>
</template>

<script>
import DetailNav from "./components/Nav";
import DetailMain from "./components/Main";
import DetailModal from "./components/Modal";
import DetailTable from "./components/Table";
import axios from "axios";
import Qs from "qs";
export default {
  name: "Detail",
  components: {
    DetailNav,
    DetailMain,
    DetailModal,
    DetailTable
  },
  data() {
    return {
      showModal: false,
      showTable: false,
      tableId: "",
      appLists: [],
      fieldList: [],
      fieldData: [],
      fieldNames: []
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
    getTableId(tableId) {
      this.tableId = tableId;
    },
    getTableData(tableId) {
      let params = { tableId: tableId, pageNum: 1, pageSize: 10 };
      axios.post("/api/field/getFieldData", Qs.stringify(params)).then(res => {
        res = res.data;
        if (res.code === 0) {
          this.fieldList = res.data.fieldData.list;
          console.log(this.fieldList);
        } else {
          this.$layer.msg(res.msg);
        }
      });
    },
    handleShowModal(showModal) {
      this.showModal = showModal;
    },
    handleShowTable(showTable) {
      this.getTableData(this.tableId);
      this.showTable = showTable;
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

