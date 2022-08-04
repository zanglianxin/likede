import request from "@/utils/request";
import store from "@/store";

export const workOrderSearch = (params) => {
    return request({
        url: '/api/task-service/task/search',
        params,
    })
}