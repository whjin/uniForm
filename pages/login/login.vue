<template>
  <div class="login-container">
    <div class="wrapper">
      <div class="header">
        <image src="@/static/images/login/badge.png"></image>
        <div class="title">值班巡检终端</div>
      </div>
      <div class="content">
        <div class="section">
          <image src="@/static/images/login/account.png"></image>
          <input
            type="text"
            placeholder="请输入账号"
            placeholder-class="placeholder"
            v-model="username"
          />
        </div>
        <div class="section">
          <image src="@/static/images/login/password.png"></image>
          <input
            v-if="inputType === 'password'"
            type="text"
            placeholder="请输入密码"
            placeholder-class="placeholder"
            v-model="password"
          />
          <input
            v-else
            type="text"
            placeholder="请输入密码"
            v-model="password"
          />
          <image
            class="pwd-image"
            :src="passwordImg"
          ></image>
        </div>
      </div>
      <div class="button">登录</div>
    </div>
  </div>
</template>

<script>
import { dateFormat } from '@/common/utils/util';

export default {
  name: 'login',
  components: {},
  data() {
    return {
      username: '',
      password: '',
      inputType: 'password',
    };
  },
  computed: {
    passwordImg() {
      return this.inputType == 'password' ? '@/static/images/login/hidden.png' : '@/static/images/login/visible.png';
    },
  },
  created() {},
  beforeDestroy() {},
  onBackPress() {
    plus.runtime.restart();
  },
  methods: {
    onTestTime() {
      let time = dateFormat('YYYY-MM-DD hh:mm:ss', new Date());
      console.log(time);
    },
  },
};
</script>

<style lang="less">
@import '../../common/less/index.less';
</style>
