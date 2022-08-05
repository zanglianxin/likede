import request from "@/utils/request";


export const workOrderSearch = (params) => {
    return request({
        url: '/api/task-service/task/search',
        params,
    })
}