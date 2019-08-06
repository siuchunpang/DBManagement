<template>
  <div class="main">
    <div class="middle">
      <div class="middle-title">
        <div>数据库管理系统</div>
        <div class="middle-subtitle">欢迎登录</div>
      </div>
      <div class="form">
        <div class="el-input">
          <input
            id="user"
            type="text"
            placeholder="用户名"
            class="el-input-inner"
            :style="{'border-color': userBorderColor}"
            @blur="handleUserBlur(user)"
            v-model="user"
          />
          <span class="error" v-show="userError">用户名不能为空</span>
        </div>
        <div class="el-input">
          <input
            id="password"
            type="password"
            placeholder="密码"
            class="el-input-inner"
            :style="{'border-color': passwordBorderColor}"
            @blur="handlePasswordBlur(password)"
            v-model="password"
          />
          <span class="error" v-show="passwordError">请输入密码</span>
        </div>
        <div class="el-form">
          <div class="el-form-item">
            <button
              id="el-login"
              class="el-button el-input-inner"
              @click="handleLoginClick"
            >
            登录</button>
          </div>
        </div>
      </div>
      <div class="el-form el-show">
        <div class="el-form-span">
          <router-link to="/reset" class="reset">重置密码</router-link>
          <router-link to="/register" class="register">注册账号</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      user: '',
      password: '',
      userError: false,
      passwordError: false,
      userBorderColor: '#bbb',
      passwordBorderColor: '#bbb'
    }
  },
  methods: {
    handleUserBlur(val) {
      if(!val) {
        this.userError = true
        this.userBorderColor = '#ff4040'
      } else {
        this.userError = false
        this.userBorderColor = '#bbb'
      }
    },
    handlePasswordBlur(val) {
      if(!val) {
        this.passwordError = true
        this.passwordBorderColor = '#ff4040'
      } else {
        this.passwordError = false
        this.passwordBorderColor = '#bbb'
      }
    },
    handleLoginClick() {

    }
  }
}
</script>

<style scoped>
@import "../../assets/styles/base.css";
</style>
