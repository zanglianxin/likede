import store from "./store";
import router from "./router";

const whiteList = ['/login', '/404']

router.beforeEach((to, from, next) => {
    if (!store.state.user.userInfo.userId){
        store.dispatch('user/getUserInfo')
    }
    const token = store.state.user.token

    if (token) {
        if (to.path === '/login') {
            next('/')
        } else {
            next()
        }
    } else {
        if (whiteList.includes(to.path)) {
            next()
        }else {
            next('/login')
        }
    }
})