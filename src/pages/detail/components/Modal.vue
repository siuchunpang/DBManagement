<template>
  <div>
    <div class="model">
      <div class="model-content">
        <div class="model-header">
          <h4 class="model-title">创建表</h4>
          <button class="btn-close" @click="handleClose">×</button>
        </div>
        <div class="model-body">
          <div class="form-group" v-for="(item, i) in arr" :key="i">
            <label class="model-name">{{ item.name }}</label>
            <input
              :id="item.id"
              :type="item.type"
              class="form-control"
              :style="{'border-color': borderColor}"
              placeholder="必填"
              @blur="handleBlur(item)"
              @focus="handleFocus(item)"
              v-model="item.inputValue"
            />
            <span class="error" v-show="showError">表名称不能为空！</span>
          </div>
        </div>
        <div class="model-footer">
          <button class="button btn-close" type="button" @click="handleClose">关闭</button>
          <button id="btn" class="submit" type="submit" @click="handleCreateApp">创建应用</button>
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
      showError: false,
      borderColor: "#bbb",
      arr: [
        {
          id: "name",
          type: "text",
          name: "表名称：",
          inputValue: "",
          borderColor: "#bbb",
          showError: false,
          errorMsg: "表名不能为空"
        },
        {
          id: "table-remark",
          type: "text",
          name: "表注释：",
          inputValue: "",
          borderColor: "#bbb",
          showError: false,
          errorMsg: "表注释不能为空！"
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
    handleCreateApp() {
      let params = {
        name: this.inputValue,
        userId: localStorage.userId
      };
      axios
        .post("/api/application/insert", Qs.stringify(params))
        .then(this.handlePostDataSucc);
    },
    handlePostDataSucc(res) {
      res = res.data;
      if (res.code === 0) {
        this.$layer.msg(res.msg);
        setTimeout(() => {
          this.$router.go(0); //当页刷新
        }, 2000);
      } else {
        this.$layer.msg(res.msg);
      }
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

      .model-name {
        padding: 15px;
        min-height: 16.43px;
        border-bottom: 1px solid #e5e5e5;
        font-size: 14px;
        font-family: '微软雅黑';
      }

      .btn-close {
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
    }
  }
}
</style>
