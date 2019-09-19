<template>
  <div class="main-right">
    <div class="main-container">
      <div class="main-border">
        <div class="main-table">
          <div class="main-toolbar">
            <el-button size="small" class="main-button">新增一行</el-button>
            <el-button size="small" class="main-button">新增列</el-button>
            <el-button size="small" class="main-button">删除列</el-button>
            <el-button size="small" class="main-button">删除表</el-button>
          </div>
          <el-table :data="tableData" max-height="500" border style="width: 100%">
            <el-table-column fixed prop="operation" label="操作" align="center" height="75px">
              <template slot-scope="scope">
                <el-button @click="handleEdit(scope.row)" align="center" type="text" size="small">编辑</el-button>
                <el-button @click="handleDelete(scope.row)" align="center" type="text">删除</el-button>
              </template>
            </el-table-column>
            <el-table-column fixed prop="id" label="id [number]"></el-table-column>
            <el-table-column prop="create_time" label="create_time [date]"></el-table-column>
            <el-table-column prop="update_time" label="update_time [date]"></el-table-column>
            <el-table-column prop="date_time" label="date_time[date]"></el-table-column>
            <el-table-column prop="now" label="now"></el-table-column>
            <el-table-column prop="upload_file" label="upload_file"></el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailTable",
  props: {
    fieldList: Array
  },
  data() {
    return {
      tableData: this.fieldList
    };
  },
  methods: {
    handleEdit(row) {
      // console.log(row);
    },
    handleDelete(row) {
      // console.log(row);
    }
  }
};
</script>

<style lang="stylus" scoped>
.main-right {
  width: calc(100% - 240px);
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;

  .main-border {
    margin: 20px;
    border: 1px solid #e6e6e6;
    background: #fff;

    // display: none;
    .main-table {
      padding: 100px 135px 100px 120px;
      height: calc(80vh - 48px);

      .main-toolbar {
        padding: 10px 0;

        .main-button {
          margin: 0;
        }
      }
    }
  }
}
</style>