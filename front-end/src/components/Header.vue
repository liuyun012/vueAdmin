<!--
@Author: qinzhenxing
@Date:   2018-01-02T15:33:56+08:00
@Last modified by:   qinzhenxing
@Last modified time: 2018-01-02T18:13:50+08:00
-->
<template lang="html">
  <div class="header">
    <div class="wrap header-wrap">
      <div class="logo">
        <img src="/static/img/logo.svg" alt="">
      </div>
      <ul class="header-links">
        <li>
          <button class="btn" @click='login'>{{ user ? user.user_name : '登录' }}</button>
        </li>
        <li>
          <button class="btn" @click='logout'>注销</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'headerCon',
  computed: {
    user () {
      return ;
      // return this.$store.state.user;
    },
  },
  methods: {
    login () {
      // if (!this.user) {
      //   this.$router.push('/');
      // }
    },
    logout () {
      // this.func.ajaxGet(this.api.userLogout, res => {
      //   if (res.data.code === 200) {
      //     this.$store.commit('user', null);
      //     this.$router.push('/');
      //   }
      // });
    },
  }
}
</script>

<style lang="css">
</style>
