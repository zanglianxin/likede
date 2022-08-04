<template>
  <div class="main">
    <el-card class="box-card">
      <Input @enter="enter" size="small"></Input>
      <Input class="status" title="工单状态"></Input>
      <MyButton>查询</MyButton>
    </el-card>
    <el-card class="table-card">
      <Table></Table>
    </el-card>
  </div>
</template>

<script>
import Input from "@/components/Input";
import MyButton from "@/components/MyButton";
import Table from "../components/Table.vue";
import { createNamespacedHelpers } from 'vuex'
const { mapActions: mapWorkOrderActions } = createNamespacedHelpers('workorder')
export default {
  data() {
    return {
      numeration: "", //编号
    };
  },

  components: {
    Input,
    MyButton,
    Table,
  },
  created() {
    this.getAllWorkOrderList()
  },

  methods: {
    ...mapWorkOrderActions(['getAllWorkOrderList']),
    enter(val) {
      this.numeration = val;
    },
  },
};
</script>

<style scoped lang="scss">
.main {
  background-color: #f8fafd;
  padding: 20px;
  .box-card {
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
  }
}
</style>
