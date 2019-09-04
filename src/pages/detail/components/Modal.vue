<template>
  <div>
    <div class="model">
      <div class="model-content">
        <div class="model-header">
          <h4 class="model-title">创建表</h4>
          <button class="header-btn-close" @click="handleClose">×</button>
        </div>
        <div class="model-body">
          <div class="form-group" v-for="(item, i) in arr" :key="i">
            <label class="model-name">{{ item.name }}</label>
            <div class="form-input">
              <input
                :id="item.id"
                :type="item.type"
                class="form-control"
                :style="{'border-color': item.borderColor}"
                placeholder="必填"
                @blur="handleBlur(item)"
                @focus="handleFocus(item)"
                v-model="item.inputValue"
              />
              <span :class="item.errorCls" v-show="item.showError">{{ item.errorMsg }}</span>
            </div>
          </div>
        </div>
        <div class="model-footer">
          <button class="button btn-close" type="button" @click="handleClose">关闭</button>
          <button id="btn" class="submit" type="submit" @click="handleCreateTable">创建表</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Qs from "qs";
export default {
  name: "DetailModal",
  data() {
    return {
      showModal: true,
      tableName: "",
      tableRemark: "",
      arr: [
        {
          id: "name",
          type: "text",
          name: "表名称：",
          inputValue: "",
          borderColor: "#bbb",
          showError: false,
          errorMsg: "表名不能为空",
          errorCls: "error-table"
        },
        {
          id: "table-remark",
          type: "text",
          name: "表注释：",
          inputValue: "",
          borderColor: "#bbb",
          showError: false,
          errorMsg: "表注释不能为空！",
          errorCls: "error-table-remark"
        }
      ]
    };
  },
  methods: {
    handleBlur(item) {
      if (item.inputValue) {
        item.showError = false;
        item.borderColor = "#bbb";
      } else {
        item.showError = true;
        item.borderColor = "#ff4040";
      }
    },
    handleFocus(item) {
      item.showError = false;
      item.borderColor = "#bbb";
    },
    handleClose() {
      this.showModal = false;
      this.$emit("showModal", this.showModal);
    },
    handleCreateTable() {
      let params = {
        name: this.arr[0].inputValue,
        remark: this.arr[1].inputValue,
        applicationId: this.$route.params.id
      };
      axios.post("/api/table/insert", Qs.stringify(params)).then(res => {
        res = res.data;
        if (res.code === 0) {
          this.$layer.msg(res.msg);
          setTimeout(() => {
            this.$router.go(0); //当页刷新
          }, 2000);
        } else {
          this.$layer.msg(res.msg);
        }
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
.form-control {
  height: 34px;
  padding: 5px;
  font-size: 12px;
  font-family: '微软雅黑';
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 2px;
}

.model {
  width: 500px;
  position: fixed;
  top: 25%;
  left: 30%;
  opacity: 1;
  z-index: 11;
  background: #fff;
  border: 1px solid #e6e6e6;
  border-radius: 6px;

  .model-content {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);

    .model-header {
      padding: 15px;
      min-height: 16.43px;
      border-bottom: 1px solid #e5e5e5;

      .model-title {
        display: inline-block;
        font-size: 14px;
        font-family: '微软雅黑';
        font-weight: 700;
      }

      .header-btn-close {
        float: right;
        font-size: 21px;
        font-weight: 700;
        line-height: 1;
        margin-top: 1px;
        cursor: pointer;
        background: 0;
        border: transparent;
        text-shadow: 0 1px 0 #fff;
        color: #000;
      }
    }
  }

  .model-body {
    text-align: center;
    position: relative;
    padding: 5px;

    .form-group {
      margin: 15px 0;

      .model-name {
        font-size: 14px;
        font-family: '微软雅黑';
      }

      .form-input {
        vertical-align: middle;
        margin-left: 10px;
        display: inline-block;

        .form-control {
          width: 390px;
        }

        .error-table {
          margin-left: 79px;
          position: absolute;
          top: 52px;
          left: 12px;
          font-size: 12px;
          color: #ff4040;
        }

        .error-table-remark {
          margin-left: 79px;
          position: absolute;
          top: 101px;
          left: 12px;
          font-size: 12px;
          color: #ff4040;
        }
      }
    }
  }

  .model-footer {
    padding: 10px;
    text-align: right;
    border-top: 1px solid #e5e5e5;

    .button {
      border-radius: 2px;
      font-size: 12px;
      color: #333;
      background: #fff;
      border: 1px solid transparent;
      border-color: #ccc;
      margin-right: 10px;
      text-align: center;
      cursor: pointer;
      padding: 5px 20px;
    }

    .submit {
      border-radius: 2px;
      font-size: 12px;
      color: #fff;
      background: #3593ff;
      border: 1px solid transparent;
      border-color: #ccc;
      margin-right: 5px;
      text-align: center;
      cursor: pointer;
      padding: 5px 20px;
    }
  }
}
</style>
