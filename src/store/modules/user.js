import { getImageCode, login } from "@/api/user";
import router from "@/router";
import { Message } from "element-ui";

export default {
  namespaced: true,
  state: {
    imgUrl: "", // 验证码图片url
    token: JSON.parse(localStorage.getItem("TOKEN")) || "", // 登录密钥
  },
  mutations: {
    // 设置图片验证码url
    setImageCode(state, payload) {
      state.imgUrl = payload;
    },

    // 设置token
    setToken(state, payload) {
      state.token = payload;
      localStorage.setItem("TOKEN", JSON.stringify(payload));
    },
  },
  actions: {
    // 获取图片验证码
    async getImageCode(context, payload) {
      try {
        const { data } = await getImageCode(payload);
        context.commit("setImageCode", URL.createObjectURL(data));
      } catch (error) {
        console.log(error);
      }
    },

    // 请求登录
    async getLogin(context, payload) {
      try {
        const { data } = await login(payload);
        // console.log(data);
        // 提交登录失败信息

        if (!data.success) {
          Message({
            message: data.msg,
            type: "warning",
          });
          return;
        }
        context.commit("setToken", data.token);
        router.push("/");
      } catch (error) {
        console.log(error);
      }
    },
  },
  getters: {},
};
