import axios from "axios"
axios.defaults.baseURL = "https://192.168.0.9:4010"

// axios.interceptors.request.use(
//     config => {
//         // if (sessionStorage.length != 0) {
//         //     config.headers.token = `${sessionStorage['token']}`
//         // }
//         // return config
//     }
// )

// 响应拦截
// axios.interceptors.response.use(
//     response => {
//         //判断token是否失效
//         // if (response.data.code == "403") {
//         //     sessionStorage.removeItem("username");
//         //     sessionStorage.removeItem("token");
//         //     // 失效跳转到登录页面，并且删除掉本地存储
//         //     router.push("/login")
//         // } else {
//         //     // 没失效接着返回响应数据
//         //     return response
//         // }
//     },
//     err => {
//         // return err
//     }
// )


export default axios