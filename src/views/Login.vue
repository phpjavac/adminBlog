<template lang="pug">
div.login
    div.box
        h1 后台管理
        input(v-model='code')
        input(v-model='password')
        button(@click='login') 登录
</template>
<script>

export default {
  data() {
    return {
      code: '',
      password: '',
    };
  },
  methods: {
    login() {
      this.$http
        .login({ code: this.code, password: this.password })
        .then((res) => {
          if (res.data.code === 0) {
            localStorage.token = res.data.token;
            console.log(this.$http);
            this.$router.push('/index');
          }
        });
    },
  },
  created() {
    console.log(this.$http.login);
  },
};
</script>
<style lang="stylus" scoped>
.login {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;

  .box {
    height: 30%;
    width: 30%;
    background: #dddddd;
    border-radius: 12px;

    input {
      display: block;
    }
  }
}
</style>
