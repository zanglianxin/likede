<template>
  <div>
    <el-table
      v-loading="loading"
      ref="singleTable"
      :data="tableList"
      highlight-current-row
      @current-change="handleCurrentChange"
      style="width: 100%"
    >
      <el-table-column type="index" width="80" label="序号"> </el-table-column>
      <el-table-column property="taskCode" label="工单编号"></el-table-column>
      <el-table-column property="innerCode" label="设备编号"></el-table-column>
      <el-table-column property="taskType.typeName" label="工单类型">
      </el-table-column>
      <el-table-column property="createType" label="工单方式">
      </el-table-column>
      <el-table-column
        property="taskStatusTypeEntity.statusName"
        label="工单状态"
      >
      </el-table-column>
      <el-table-column property="userName" label="运营人员"> </el-table-column>
      <el-table-column property="createTime" label="创建日期">
      </el-table-column>
      <el-table-column width="80" property="" label="操作">
        <template slot-scope="scope">
          <a href="#" @click.prevent="detailFn(scope.row)" style="color: #5f84ff">查看详情</a>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState: mapWorkOrderState } = createNamespacedHelpers("workorder");
export default {
  data() {
    return {};
  },
  props: {
    loading: {
      type: Boolean,
      default: false
    }
  },

  created() {},
  computed: {
    ...mapWorkOrderState(["tableList"]),
  },
  methods: {
    handleCurrentChange(val) {
      this.currentRow = val;
    },
    detailFn(obj){
      console.log(obj);
    }
  },
};
</script>

<style scoped></style>
