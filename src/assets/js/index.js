import axios from "axios"
import router from '../../router/index'
import store from "../../store"
if (process.env.NODE_ENV == "development") {
    axios.defaults.baseURL = "https://127.0.0.1:4010"
} else if (process.env.NODE_ENV == "production") {
    axios.defaults.baseURL = "https://zzzsuqi.cn:4010"
}

axios.interceptors.request.use(
    config => {
        if (store.state.token) {
            config.headers.token = `${store.state.token}`
        }
        return config
    }
)

// 响应拦截
axios.interceptors.response.use(
    response => {
        //判断token是否失效
        if (response.data.code == "403") {
            sessionStorage.removeItem("username");
            sessionStorage.removeItem("token");
            // 失效跳转到登录页面，并且删除掉本地存储
            router.push("/login")
        } else if(response.data.code == "200") {
            // 没失效接着返回响应数据
            return response.data
        }
    },
    err => {
        console.log(err)
        return err
    }
)


export default axios