import request from "@/utils/request";
import store from "@/store";

/**
 * 请求图片验证码
 * @param {Number} clientToken 随机数
 */
export const getImageCode = (clientToken) => {
  return request({
    url: `/api/user-service/user/imageCode/${clientToken}`,
    responseType: "blob",
  });
};


/**
 * 请求登录
 * @param {Object} data 
 * @returns Promise
 */
export function login(data) {
  return request({
    url: "/api/user-service/user/login",
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    data,
  });
}


export const getUserInfo = () => {
  return request({
    url: '/api/user-service/user/' + store.state.user.userId
  })
}