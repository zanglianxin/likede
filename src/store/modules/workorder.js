import { workOrderSearch } from "@/api/workorder";


export default {
  namespaced: true,
  state: {
    tableList: []
  },
  mutations: {
    setTableList(state, payload) {
        state.tableList = payload
    }
  },
  actions: {
    async getAllWorkOrderList(context){
        const data = await workOrderSearch()
        console.log(data);
        data.currentPageRecords.forEach((item) => {
            item.createType = item.createType ? '手动' : '自动'
            item.taskStatus = {1:'待办',2:'进行',3:'取消',4:'完成'}[item.taskStatus]
        })
        context.commit('setTableList', data.currentPageRecords)
    }
  },
  getters: {},
};
