<template>
  <div class="main">
    <div class="middle">
      <div class="middle-title">
        <div>数据库管理系统</div>
        <div class="middle-subtitle">欢迎登录</div>
      </div>
      <div class="form" v-for="(item, i) in arr" :key="i">
        <div class="input">
          <input
            :id="item.id"
            :type="item.type"
            :placeholder="item.placeholder"
            class="input-inner"
            :style="{'border-color': item.borderColor}"
            @blur="handleBlur(item)"
            @focus="handleFocus(item)"
            v-model="item.inputValue"
          />
          <span class="error" v-show="item.showError">{{ item.errorMsg }}</span>
        </div>
      </div>
      <div class="form">
        <div class="form-item">
          <button id="login" class="button input-inner" @click="handleLoginClick">登录</button>
        </div>
      </div>
      <div class="form show">
        <div class="form-span">
          <router-link to="/reset" class="reset">重置密码</router-link>
          <router-link to="/register" class="register">注册账号</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Qs from "qs";
export default {
  name: "Login",
  data() {
    return {
      arr: [
        {
          id: "user",
          type: "text",
          placeholder: "用户名",
          inputValue: "",
          borderColor: "#bbb",
          showError: false,
          errorMsg: "用户名不能为空"
        },
        {
          id: "password",
          type: "password",
          placeholder: "密码",
          inputValue: "",
          borderColor: "#bbb",
          showError: false,
          errorMsg: "请输入密码"
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
    handleLoginClick() {
      let params = {};
      for (let i = 0; i < this.arr.length; i++) {
        params[this.arr[i].id] = this.arr[i].inputValue;
        if (!this.arr[i].inputValue) {
          this.$layer.msg(this.arr[i].errorMsg);
          return;
        }
      }
      axios
        .post("/api/login", Qs.stringify(params))
        .then(this.handlePostDataSucc);
    },
    handlePostDataSucc(res) {
      res = res.data;
      console.log(res);
      localStorage.login = 1;
      if (res.code === 0) {
        localStorage.userId = res.data.id;
        localStorage.user = res.data.user;
        this.$layer.msg(res.msg);
        setTimeout(() => {
          this.$router.push("/index");
        }, 2000);
      } else {
        this.$layer.msg(res.msg);
      }
    }
  }
};
</script>

<style scoped>
@import "../../assets/styles/base.css";
</style>
