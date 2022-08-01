import store from '@/store'
import axios from 'axios'

const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

request.interceptors.request.use (
  (config) => {
    const token = store.state.user.token

    if (token) {
      config.headers.Authorization = token
    }
    return config
  },
  (error) => {
    return Promise.reject (error)
  }
)
export default request