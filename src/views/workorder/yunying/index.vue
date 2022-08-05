<template>
  <div class="main">
    <el-card class="box-card">
      <Input @enter="orderIdFn" size="small"></Input>
      <Input class="status" title="工单状态" input="123" ref="orderStatus">
        <template slot="html">
          <el-dropdown trigger="click" @command="handleCommand">
            <span class="el-dropdown-link">
              <i class="down-list el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="待办">待办</el-dropdown-item>
              <el-dropdown-item command="进行">进行</el-dropdown-item>
              <el-dropdown-item command="取消">取消</el-dropdown-item>
              <el-dropdown-item command="完成">完成</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </template>
      </Input>
      <MyButton class="search-btn" @click.native="selectFn"
        ><i class="el-icon-search" style="margin-right: 5px"></i>查询</MyButton
      >
    </el-card>
    <el-card class="table-card">
      <div class="header-btn">
        <MyButton bgcolor="#ff702b" style="margin-right: 10px; cursor: pointer"
          ><i class="el-icon-circle-plus-outline" style="margin-right: 5px"></i
          >新建</MyButton
        >
        <MyButton bgcolor="#fbf4f0" fscolor="#000" style="cursor: pointer"
          >工单配置</MyButton
        >
      </div>
      <Table :loading="loading"></Table>
      <Pagination
        :totalCount="totalCount"
        :pageIndex="pageIndex"
        :totalPage="totalPage"
        :btnLoading="loading"
        @next="nextPage"
        @prev="prevPage"
      ></Pagination>
    </el-card>
  </div>
</template>

<script>
import Input from "@/components/Input";
import MyButton from "@/components/MyButton";
import Table from "../components/Table.vue";
import Pagination from "@/components/Pagination";
import { createNamespacedHelpers } from "vuex";
import { workOrderSearch } from "@/api/workorder";

const { mapActions: mapWorkOrderActions, mapState: mapWorkOrderState } =
  createNamespacedHelpers("workorder");
export default {
  data() {
    return {
      numeration: "", //编号
      loading: false,
      status: "" // 工单状态
    };
  },

  components: {
    Input,
    MyButton,
    Table,
    Pagination,
  },
  async created() {
    this.loading = true;
    await this.getAllWorkOrderList();
    this.loading = false;
  },

  computed: {
    ...mapWorkOrderState(["totalCount", "pageIndex", "totalPage"]),
  },
  methods: {
    ...mapWorkOrderActions([
      "getAllWorkOrderList",
      "getNextPageList",
      "getPrevPageList",
    ]),
    orderIdFn(val) {
      this.numeration = val;
    },
    async nextPage() {
      this.loading = true;
      await this.getNextPageList();
      this.loading = false;
    },
    async prevPage() {
      this.loading = true;
      await this.getPrevPageList();
      this.loading = false;
    },
    async selectFn() {
      this.loading = true;
      this.$store.commit('workorder/setStatus', this.$refs.orderStatus.value)
      const data = await workOrderSearch({
        taskCode: this.numeration,
        status: {'待办': '1','进行': '2','取消':'3','完成':'4'}[this.$refs.orderStatus.value] || ''
      });
      console.log(data);
      data.currentPageRecords.forEach((item) => {
        item.createType = item.createType ? "手动" : "自动";
      });
      this.$store.commit('workorder/setTableList', data.currentPageRecords)
      this.$store.commit('workorder/setTotalCount', data.totalCount)
      this.$store.commit('workorder/setPageIndex', data.pageIndex)
      this.$store.commit('workorder/setTotalPage', data.totalPage)
      this.loading = false;
    },
    handleCommand(command){
      console.log(command);
      // const arr = ['待办','进行','取消','完成']
      // this.status = arr.indexOf(command) + 1
      this.$refs.orderStatus.value = command
    }
  },
};
</script>

<style scoped lang="scss">
.main {
  background-color: #f8fafd;
  padding: 20px;
  .box-card {
    .down-list {
      position: relative;
      top: 10px;
      right: 8px;
      font-size: 18px;
    }
    .search-btn {
      cursor: pointer;
    }
    ::v-deep .el-card__body {
      display: flex;
      align-items: center;
    }
    .status {
      margin: 0 15px;
    }
  }

  .table-card {
    margin-top: 20px;
    .header-btn {
      display: flex;
      margin-bottom: 20px;
    }
  }
}
</style>
