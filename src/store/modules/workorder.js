import { workOrderSearch } from "@/api/workorder";

export default {
  namespaced: true,
  state: {
    tableList: [],
    totalCount: "",
    pageIndex: "",
    totalPage: "",
    status: ""
  },
  mutations: {
    setTableList(state, payload) {
      state.tableList = payload;
    },
    setTotalCount(state, payload) {
      state.totalCount = payload;
    },
    setPageIndex(state, payload) {
      state.pageIndex = payload;
    },
    setTotalPage(state, payload) {
      state.totalPage = payload;
    },
    setStatus(state, payload) {
      state.status = payload;
    },
  },
  actions: {
    // 获取表单初始数据
    async getAllWorkOrderList(context) {
      const data = await workOrderSearch();
      console.log(data);
      context.commit("setTotalCount", data.totalCount);
      context.commit("setPageIndex", data.pageIndex);
      context.commit("setTotalPage", data.totalPage);
      data.currentPageRecords.forEach((item) => {
        item.createType = item.createType ? "手动" : "自动";
      });
      context.commit("setTableList", data.currentPageRecords);
    },
    // 下一页
    async getNextPageList(context) {
      let index = context.state.pageIndex
      if (index >= context.state.totalPage) return
      index ++
      const data = await workOrderSearch({
        pageIndex: index,
        status: {'待办': '1','进行': '2','取消':'3','完成':'4'}[context.state.status] || '',
      });
      // console.log(data);
      data.currentPageRecords.forEach((item) => {
        item.createType = item.createType ? "手动" : "自动";
      });
      context.commit("setTableList", data.currentPageRecords);
      context.commit("setPageIndex", index + '');
      console.log(context.state.pageIndex);
    },

    // 上一页
    async getPrevPageList(context) {
      let index = context.state.pageIndex
      if (index <= 1) return
      index --
      const data = await workOrderSearch({
        pageIndex: index
      });
      // console.log(data);
      data.currentPageRecords.forEach((item) => {
        item.createType = item.createType ? "手动" : "自动";
      });
      context.commit("setTableList", data.currentPageRecords);
      context.commit("setPageIndex", index + '');
      console.log(context.state.pageIndex);
    },
  },
  getters: {},
};
