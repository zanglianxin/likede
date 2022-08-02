import store from "@/store";
import axios from "axios";
import { Message } from "element-ui";

const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000,
});

// 请求拦截器
request.interceptors.request.use(
  (config) => {
    const token = store.state.user.token;

    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
request.interceptors.response.use((res) => {
  const { data } = res;
  return data;
},
function (error) {
    // 对响应错误做点什么
    Message.error('系统异常')
    return Promise.reject(error)
}
);
export default request;
