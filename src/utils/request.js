import router from "@/router";
import store from "@/store";
import axios from "axios";
import { Message } from "element-ui";
import { getTokenTime } from "./auth";

const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000,
});

const isTokenTime = () => {
  const nowTime = Date.now();
  const tokenTime = getTokenTime();
  const timeOut = 5 * 60 * 60 * 1000;
  return nowTime - tokenTime > timeOut;
};

// 请求拦截器
request.interceptors.request.use(
  (config) => {
    const token = store.state.user.token;

    if (token) {
      if (isTokenTime()) {
        store.dispatch("user/logout");
        router.push("/login");
        return Promise.reject(new Error("登录过期，请重新登录"));
      } else {
        config.headers.Authorization = token;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
request.interceptors.response.use(
  (res) => {
    const { data } = res;
    return data;
  },
  function (error) {
    // 对响应错误做点什么
    // console.dir(error);
    if (error?.response?.status === 401) {
      store.dispatch("user/logout");
      router.push("/login");
      Message.error("身份认证失败，请重新登录");
    } else {
      Message.error(error.message);
    }
    return Promise.reject(error);
  }
);
export default request;
