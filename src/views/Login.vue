<template>
  <div>
    <HmHeader>登录</HmHeader>
    <HmLogo></HmLogo>
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        label="用户名"
        placeholder="请输入用户名/手机号"
        :rules="rules.username"
      />
      <van-field
        v-model="password"
        type="password"
        label="密码"
        placeholder="请输入密码"
        :rules="rules.password"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      username: '',
      password: '',
      rules: {
        username: [
          { required: true, message: '请填写用户名', trigger: 'onchange' },
          {
            pattern: /^\d{5,11}$/,
            message: '用户名只能是5-11位数字',
            trigger: 'onChange'
          }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'onchange' },
          {
            pattern: /^\w{3,9}$/,
            message: '密码只能是3-9位',
            trigger: 'onChange'
          }
        ]
      }
    }
  },
  methods: {
    async onSubmit() {
      const res = await axios.post('http://localhost:3000/login', {
        username: this.username,
        password: this.password
      })
      console.log(res)
      const { statusCode, message, data } = res.data
      if (statusCode === 200) {
        // alert(message)
        this.$toast.success(message)
        // 登录成功保存token
        localStorage.setItem('token', data.token)

        this.$router.push('/')
      } else {
        // alert(message)
        this.$toast.fail(message)
      }
    }
  },
  created() {
    // console.log(this.$route.query)
    const { username, password } = this.$route.params
    this.username = username
    this.password = password
    console.log(username, password)
  }
}
</script>

<style></style>
