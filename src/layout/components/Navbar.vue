<template>
  <div class="navbar">
    <div class="logo">
      <img src="~@/assets/images/headerlogo.png" alt="" />
    </div>
    <div class="right-menu">
      <div class="block">
        <el-avatar :size="35" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" ></el-avatar>
      </div>
      <div class="welcome">欢迎您，<span>admin</span></div>
      <span @click="loginOut" class="login-out">退出<i class="el-icon-caret-bottom"></i></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  created() {},

  methods: {
    loginOut() {
      localStorage.removeItem('TOKEN')
      this.$router.push('/login')
    }
  },
};
</script>

<style scoped lang="scss">
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  background: url("~@/assets/images/header.png") no-repeat 0 0 / cover;
}

body:-webkit-scrollbar {
  display: none;
}

.navbar {
  z-index: 9999;
  .logo {
    width: 88px;
    height: 35.81px;
    img {
      width: 100%;
    }
    margin-top: 10px;
    margin-left: 15px;
  }
  .right-menu {
    position: absolute;
    right: 0;
    top: 0;
    display: flex;
    width: 240px;
    height: 60px;
    align-items: center;
    color: #fff;
    margin-right: 24px;
    .block {
      margin-right: 10px;
    }
    .welcome {
      width: 140px;
    }
    .login-out {
      cursor: pointer;
    }
  }
}
</style>
