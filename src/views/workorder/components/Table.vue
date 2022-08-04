<template>
  <div>
    <el-table
      ref="singleTable"
      :data="tableList"
      highlight-current-row
      @current-change="handleCurrentChange"
      style="width: 100%"
    >
      <el-table-column type="index" width="80" label="序号"> </el-table-column>
      <el-table-column property="taskCode" label="工单编号" ></el-table-column>
      <el-table-column property="innerCode" label="设备编号" ></el-table-column>
      <el-table-column property="taskType.typeName" label="工单类型"> </el-table-column>
      <el-table-column property="createType" label="工单方式"> </el-table-column>
      <el-table-column property="taskStatus" label="工单状态"> </el-table-column>
      <el-table-column property="userName" label="运营人员"> </el-table-column>
      <el-table-column property="createTime" label="创建日期"> </el-table-column>
      <el-table-column width="80" property="" label="操作">
        <a href="#">查看详情</a>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState: mapWorkOrderState } = createNamespacedHelpers('workorder')
export default {
  data() {
    return {
    };
  },

  created() {},
  computed: {
    ...mapWorkOrderState(['tableList'])
  },
  methods: {
    handleCurrentChange(val) {
      this.currentRow = val;
    },
  },
};
</script>

<style scoped></style>
