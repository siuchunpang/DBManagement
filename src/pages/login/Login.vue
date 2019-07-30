<template>
  <div class="main">
    <div class="middle">
      <div class="middle-title">
        <div>数据库管理系统</div>
        <div class="middle-subtitle">欢迎登录</div>
      </div>
      <div class="form">
        <div class="el-input">
          <input id="user" type="text" placeholder="用户名" class="el-input_inner" />
          <span class="error"></span>
        </div>
        <div class="el-input">
          <input id="password" type="password" placeholder="密码" class="el-input_inner" />
          <span class="error"></span>
        </div>
        <div class="el-form">
          <div class="el-form-item">
            <button id="el-login" class="el-button el-input_inner">登录</button>
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
  name: "Login"
}
</script>

<style scoped>
  
</style>
