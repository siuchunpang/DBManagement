<template>
  <div class="main">
		<div class="middle">
			<div class="middle-title">
				<div>数据库管理系统</div>
				<div class="middle-subtitle">注册账号</div>
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
					>
					<span class="error" v-show="item.showError">{{ item.errorMsg }}</span>
				</div>
			</div>
			<div class="form">
				<div class="form-item">
					<button
						id="register"
						class="button input-inner"
						@click="handleRegisterClick"
					>
					立即注册</button>
				</div>
			</div>
			<div class="form">
				<div class="form-login">
					<router-link to="/" class="back_to_login">返回登录</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
import Qs from 'qs'
export default {
	name: "Register",
	data() {
    return {
      arr: [{
        id: 'user',
        type: 'text',
        placeholder: '用户名',
        inputValue: '',
        borderColor: '#bbb',
        showError: false,
        errorMsg: '用户名不能为空',
      },{
        id: 'name',
        type: 'text',
        placeholder: '昵称',
        inputValue: '',
        borderColor: '#bbb',
        showError: false,
        errorMsg: '昵称不能为空',
      },{
        id: 'num',
        type: 'text',
        placeholder: '用户编号',
        inputValue: '',
        borderColor: '#bbb',
        showError: false,
        errorMsg: '用户编号不能为空',
      },{
        id: 'password',
        type: 'password',
        placeholder: '密码',
        inputValue: '',
        borderColor: '#bbb',
        showError: false,
        errorMsg: '请输入密码',
      },{
        id: 'repeatPassword',
        type: 'password',
        placeholder: '确认密码',
        inputValue: '',
        borderColor: '#bbb',
        showError: false,
        errorMsg: '请再次输入密码',
      },{
        id: 'email',
        type: 'text',
        placeholder: '邮件',
        inputValue: '',
        borderColor: '#bbb',
        showError: false,
        errorMsg: '邮箱不能为空',
      }]
    }
	},
	methods: {
    handleBlur(item) {
      if (item.inputValue) {
        item.showError = false
        item.borderColor = '#bbb'
      } else {
        item.showError = true
        item.borderColor = '#ff4040'
      }
    },
    handleFocus(item) {
      item.showError = false
      item.borderColor = '#bbb'
    },
    handleRegisterClick() {
      let params = {}
      for (let i = 0; i < this.arr.length; i++) {
				params[this.arr[i].id] = this.arr[i].inputValue;
				if (!this.arr[i].inputValue) {
					this.$layer.msg(this.arr[i].errorMsg)
					return
				}
      }
      axios.post('http://cr3fd9.natappfree.cc/register', Qs.stringify(params)).then(this.handlePostDataSucc)
    },
    handlePostDataSucc(res) {
      this.$layer.msg(res.data.msg)
    }
  }
}
</script>

<style scoped>
@import "../../assets/styles/base.css";
</style>
