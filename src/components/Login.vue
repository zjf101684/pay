<!-- 登录页 -->
<template>
  <div class="login_container">
    <div class="box">
      <img src="../assets/images/logo.png" alt="">
      <el-form ref="form" :model="form" :rules="rules">
        <el-form-item label="" prop="username">
          <el-input prefix-icon="iconfont icon-account" v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="" prop="password">
          <el-input prefix-icon="iconfont icon-eye-slash" v-model="form.password" type="password"></el-input>
        </el-form-item>
      </el-form>
      <el-button>重置</el-button>
      <el-button type="primary" @click="submit()">登录</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      // 表单信息
      form: {
        username: 'admin',
        password: '123456'
      },
      // 校验规则
      rules: {
        username: [
          {required: true, message: '用户名必填', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '密码必填', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    submit () {
      // 表单校验
      this.$refs.form.validate(async valid => {
        if (valid) {
          const {data: {data, meta}} = await this.$http.post('login', this.form)
          if (meta.status !== 200) return this.$message.error(meta.msg || '登录失败')
          this.$message.success('登录成功')
          // 登录成功 保存token
          sessionStorage.setItem('token', data.token)
          // 跳转到首页
          this.$router.push('/home')
        }
      })
    }
  }
}
</script>
<style scoped>
.login_container {
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #ccc, #105763)
}
.login_container .box {
  width: 400px;
  height: 250px;
  box-shadow: 0 0 10px #eee;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-60%);
  border-radius: 4px;
  background: linear-gradient(45deg, #D2ECF1, #efefef);
  padding: 0 15px;
  box-sizing: border-box
}
.login_container .box img {
    width: 200px;
    display: block;
    margin: 15px auto;
}
</style>
