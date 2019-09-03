<template>
  <div>
    <div class="modal">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">创建应用</h4>
          <button class="btn-close" @click="handleClose">×</button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label class="modal-name">应用名称：</label>
            <input
              id="name"
              type="text"
              class="form-control"
              :style="{'border-color': borderColor}"
              placeholder="必填"
              v-model="inputValue"
              @blur="handleBlur(inputValue)"
              @focus="handleFocus"
            />
            <span class="error" v-show="showError">应用名称不能为空！</span>
          </div>
        </div>
        <div class="modal-footer">
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
  name: "IndexModal",
  data() {
    return {
      showModal: true,
      inputValue: "",
      showError: false,
      borderColor: "#bbb"
    };
  },
  methods: {
    handleBlur(inputValue) {
      if (inputValue) {
        this.showError = false;
        this.borderColor = "#bbb";
      } else {
        this.showError = true;
        this.borderColor = "#ff4040";
      }
    },
    handleFocus() {
      this.showError = false;
      this.borderColor = "#bbb";
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
        .post(
          "/api/application/insert",
          Qs.stringify(params)
        )
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
.modal-content {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);

  .modal-header {
    padding: 15px;
    min-height: 16.43px;
    border-bottom: 1px solid #e5e5e5;

    .modal-title {
      display: inline-block;
      font-size: 14px;
      font-family: '微软雅黑';
      font-weight: 700;
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

  .modal-body {
    position: relative;
    padding: 20px;

    .modal-name {
      font-size: 14px;
      font-family: '微软雅黑';
    }

    .form-control {
      height: 34px;
      width: 380px;
      padding: 5px;
      margin-left: 5px;
      font-size: 12px;
      box-sizing: border-box;
      border: 1px solid #ccc;
      border-radius: 2px;
    }

    .error {
      margin-left: 80px;
      float: left;
      font-size: 12px;
      color: #ff4040;
    }
  }

  .modal-footer {
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
      padding: 5px 20px;
      margin-right: 10px;
      text-align: center;
      cursor: pointer;
    }

    .submit {
      border-radius: 2px;
      font-size: 12px;
      color: #fff;
      background: #3593ff;
      border: 1px solid transparent;
      border-color: #ccc;
      padding: 5px 20px;
      margin-right: 5px;
      text-align: center;
      cursor: pointer;
    }
  }
}
</style>
