
import request from "@/util/request.js";

function articleGetAllService(){
    //同步等待服务器响应的结果，并返回, async await
    return request.get("/article/getAll")
}

function articleSearchService(conditions){
    return request.get("/article/search",{params:conditions})
}

export{articleGetAllService,articleSearchService}