<template>
  <div class="block">
    <span class="demonstration">共{{ totalCount }}条记录 第{{pageIndex}}/{{totalPage}}页</span>
    <el-pagination
      v-loading="btnLoading"
      :page-size="10"
      layout="total, prev, pager, next"
      prev-text="上一页"
      next-text="下一页"
      @prev-click="prevClick"
      @next-click="nextClick"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  data() {
    return {
    };
  },

  created() {},
  props: {
    totalCount: {
      type: String,
      default: "",
    },
    totalPage: {
      type: String,
      default: "",
    },
    pageIndex: {
      type: String,
      default: "",
    },
    btnLoading: {
        type: Boolean,
        default: false,
    }
  },
  methods: {
    prevClick(){
        this.$emit('prev')
    },
    nextClick(){
        this.$emit('next')
    }
  },
};
</script>

<style scoped lang="scss">
.block {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
}
::v-deep .btn-next {
  width: 70px;
  height: 32px;
  margin: 0 16px;
  border-radius: 2px;
  background-color: #d5ddf8;
  text-align: center;
}

::v-deep .btn-prev {
  width: 70px;
  height: 32px;
  margin: 0 16px;
  border-radius: 2px;
  background-color: #d5ddf8;
  &:disabled {
    background: #edf0f9;
    color: #d8dde3;
  }
}
</style>
