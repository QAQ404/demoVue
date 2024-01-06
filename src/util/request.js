//定制请求的实例
import axios from "axios"; //npm install axios

//公共前缀
const baseURL = "http://localhost:8080";
const instance = axios.create({baseURL});

//添加响应拦截器
instance.interceptors.response.use(
    result=>{
        return result.data;
    },
    err=>{
        alert("服务异常");
        return Promise.reject(err);
    }
)

export default instance;