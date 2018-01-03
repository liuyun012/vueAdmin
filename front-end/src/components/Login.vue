<!--
@Author: qinzhenxing
@Date:   2018-01-02T15:47:50+08:00
@Last modified by:   qinzhenxing
@Last modified time: 2018-01-02T18:43:50+08:00
-->
<template lang="html">
  <div class="login">
    <el-form class="login-form" ref="loginForm" :model="loginForm" :rules="rules" label-width="100px">
      <h1 class="from-title">后台管理系统</h1>
      <el-form-item label="账号" prop="user_name">
        <el-input type="text" v-model="loginForm.user_name" auto-complete="off"></el-input>
      </el-form-item>

      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="loginForm.pass" auto-complete="off"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button @click="resetForm('loginForm')">重置</el-button>
        <el-button type="primary" @click="submitForm('loginForm')">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      loginForm: {
        user_name: '',
        pass: ''
      },
      rules: {
        user_name: [{required: true, message: '请输入用户名', trigger: 'blur'}],
        pass: [{required: true, message: '请输入密码', trigger: 'blur'}]
      }
    }
  },
  methods: {
    submitForm(fromName) {
      this.$message.success('登陆成功');
      this.$router.push('/admin');
      // this.$refs[formName].validate((valid) => {
      //   if (valid) {
      //     this.func.ajaxPost(this.api.userLogin, this.loginForm, res => {
      //       if (res.data.code === 200) {
      //         this.$store.commit('user', res.data.user);
      //         this.$message.success('登陆成功');
      //         this.$router.push('/admin');
      //       }
      //     })
      //   }
      // })
    },
    resetForm(formName) {
      // this.$refs[formName].resetFields();
    }
  },
  created () {
    // if (this.$store.state.user) {
    //   this.$router.push('/admin');
    // }
  }
}
</script>

<style lang="css">
</style>
