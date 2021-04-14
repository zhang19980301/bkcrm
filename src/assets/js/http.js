import axios from './index'
let that = null
const httpurl = axios.defaults.baseURL
class Http {
    constructor() {
        that = this
    }
    request({ url, data = {}, methods = "post" }) {
        return new Promise((success, faild) => {
            that.send(url, data, methods, success, faild)
        })
    }

    send(url, data, methods, success, faild) {
        let HTTPS;
        if (methods === "post") {
            HTTPS = axios.post(httpurl + url, data)
        } else {
            HTTPS = axios.get(httpurl + url, { params: data })
        }
        HTTPS.then((res) => {
            if (res.data.code !== 200) {
                faild(res)
            } else {
                success(res)
            }
        }).catch((err) => {
            faild(err)
        })
    }
}


export default new Http()