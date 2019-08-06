<template>
  <div class="main">
		<div class="middle">
			<div class="middle-title">
				<div>数据库管理系统</div>
				<div class="middle-subtitle">注册账号</div>
			</div>
			<div class="form">
				<div class="el-input">
					<input id="user" type="text" placeholder="用户名" class="el-input-inner">
					<span class="error"></span>
				</div>
				<div class="el-input">
					<input id="name" type="text" placeholder="昵称" class="el-input-inner">
					<span class="error"></span>
				</div>
				<div class="el-input">
					<input id="num" type="text" placeholder="用户编号" class="el-input-inner">
					<span class="error"></span>
				</div>
				<div class="el-input">
					<input id="password" type="password" placeholder="密码" class="el-input-inner">
					<span class="error"></span>
				</div>
				<div class="el-input">
					<input id="repeatPassword" type="password" placeholder="确认密码" class="el-input-inner">
					<span class="error"></span>
				</div>
				<div class="el-input">
					<input id="email" type="text" placeholder="邮件" class="el-input-inner">
					<span class="error"></span>
				</div>
			</div>
			<div class="el-form">
				<div class="el-form-item">
					<button id="el-register" class="el-button el-input-inner">立即注册</button>
				</div>
			</div>
			<div class="el-form">
				<div class="el-form-login">
					<router-link to="/" class="back_to_login">返回登录</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: "Register"
}
</script>

<style scoped>
@import "../../assets/styles/base.css";
</style>
