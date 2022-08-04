import { getImageCode, getUserInfo, login } from "@/api/user";
import router from "@/router";
import { setTokenTime } from "@/utils/auth";
import { Message } from "element-ui";

export default {
  namespaced: true,
  state: {
    imgUrl: "", // 验证码图片url
    token: "", // 登录密钥
    userId: '', // 用户Id
    userInfo: {} // 用户信息
  },
  mutations: {
    // 设置图片验证码url
    setImageCode(state, payload) {
      state.imgUrl = payload;
    },

    // 设置token
    setToken(state, payload) {
      state.token = payload?.token;
      state.userId = payload?.userId;
    },

    // 设置用户信息
    setUserInfo(state, payload) {
      state.userInfo = payload
    }
  },
  actions: {
    // 获取图片验证码
    async getImageCode(context, payload) {
      try {
        const data  = await getImageCode(payload);
        context.commit("setImageCode", URL.createObjectURL(data));
      } catch (error) {
        console.log(error);
      }
    },

    // 请求登录
    async getLogin(context, payload) {
      try {
        const  data  = await login(payload);
        // console.log(data);
        // 提交登录失败信息

        if (!data.success) {
          Message({
            message: data.msg,
            type: "warning",
          });
          return;
        }
        context.commit("setToken", data);
        setTokenTime()
        router.push("/");
      } catch (error) {
        console.log(error);
      }
    },

    // 请求用户信息
    async getUserInfo(context) {
      const data = await getUserInfo()
      // console.log(data)
      context.commit('setUserInfo', data)
    },

    // 退出登录
    logout(context) {
      context.commit('setToken', '')
      context.commit('setUserInfo', {})
    }
  },
  getters: {},
};
