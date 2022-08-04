<template>
  <div class="box">
    <span>
      {{ title }}
    </span>
    <el-input
    class="input"
      v-model="input"
      @change="enterFn"
      placeholder="请输入内容"
    ></el-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
    };
  },
  props: {
    title: {
      type: String,
      default: "工单编号:",
    },
  },

  created() {},

  methods: {
    enterFn() {
      this.$emit("enter", this.input);
    },
  },
};
</script>

<style scoped>
.box {
    width: 277px;
  display: flex;

  align-items: center;
}
span {
    flex: .3;
}
.input {
    flex: .7;
}
</style>
