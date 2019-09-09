<template>
  <div class="main">
    <div class="main-container">
      <div class="choose-app">
        <form>
          <select v-model="selected" class="form-control" @change="changeOption(selected)">
            <option v-for="(item, i) of appLists" :key="i" :value="item.id">{{ item.name }}</option>
          </select>
        </form>
      </div>
      <div class="sidebar-list">
        <div class="sidebar-title">
          <b>数据库</b>
          <button type="button" class="add-table" @click="createTable">添加表</button>
        </div>
        <div class="sidebar-search">
          <div class="search">
            <input class="form-control" placeholder="表名搜索" />
            <img class="search-img" src="~styles/icon/search.png" alt="搜索" />
          </div>
        </div>
        <div class="sidebar-container">
          <ul class="table">
            <li
              class="table-list"
              v-for="tableItem of tableLists"
              :key="tableItem.id"
              @click="handleClickTable(tableItem)"
              :class="{active : active == tableItem.name}"
            >
              <div class="table-name">{{ tableItem.name }}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Qs from "qs";
export default {
  name: "DetailMain",
  data() {
    return {
      selected: this.$route.params.id,
      showModal: false,
      active: "",
      tableLists: []
    };
  },
  props: {
    appLists: Array
  },
  methods: {
    createTable() {
      this.showModal = true;
      this.$emit("showModal", this.showModal);
    },
    changeOption(selected) {
      this.$router.push("/detail/" + selected);
    },
    getTable(selected) {
      let params = { applicationId: selected };
      axios.post("/api/table/getTables", Qs.stringify(params)).then(res => {
        res = res.data;
        if (res.code === 0) {
          this.tableLists = res.data;
          console.log(res);
        } else {
          this.$layer.msg(res.msg);
        }
      });
    },
    handleClickTable(tableItem) {
      this.active = tableItem.name;
      this.$emit("tableId", tableItem.id);
      this.$emit("showTable", true);
    }
  },
  watch: {
    $route(to, from) {
      // 对路由变化作出响应...
      this.getTable(this.selected);
    }
  },
  mounted() {
    this.getTable(this.selected);
  }
  // beforeRouteUpdate(to, from, next) {
  //   this.getTable(this.selected);
  //   next();
  // }
};
</script>

<style lang="stylus" scoped>
input::-webkit-input-placeholder {
  // WebKit browsers 修改input框默认值样式
  color: #999;
}

.active {
   background: #f6f6f6;
 }

.form-control {
  width: 100%;
  height: 34px;
  padding: 5px;
  font-size: 12px;
  font-family: '微软雅黑';
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 2px;
}

.main {
  position: fixed;
  top: 0;
  left: 60px;
  width: 180px;
  height: 100%;

  .main-container {
    height: 100%;
    border-left: 1px solid #dadada;
    border-right: 1px solid #dadada;
    background: #e6e9ee;

    .choose-app {
      .form-control {
        width: 100%;
        cursor: pointer;
      }
    }

    .sidebar-list {
      .sidebar-title {
        height: 47px;
        font-size: 14px;
        line-height: 47px;
        padding: 0 10px;

        .add-table {
          cursor: pointer;
          margin-left: 67px;
          border-color: transparent;
          color: #3593ff;
          background: #e6e9ee;
          font-size: 12px;
        }
      }

      .sidebar-search {
        margin: 5px 10px;

        .search {
          width: 100%;

          .form-container {
            width: 100%;
            border: 1px solid #ccc;
          }

          .search-img {
            position: absolute;
            top: 97px;
            left: 146px;
            height: 15px;
            // cursor: pointer;
          }
        }
      }

      .sidebar-container {
        margin-top: 12px;
        width: 100%;
        height: 83%;

        .table-list:hover {
          cursor: pointer;
          background: #f6f6f6 !important;
        }

        .table-name {
          margin: 8px 0;
          padding: 8px 0 8px 8px;
          font-size: 12px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }
}
</style>
