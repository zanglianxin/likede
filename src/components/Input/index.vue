<template>
  <div class="box">
    <span>
      {{ title }}
    </span>
    <el-input
      class="input"
      v-model="value"
      @change="enterFn"
      placeholder="请输入内容"
    >
      <template slot="suffix">
        <slot name="html" />
      </template>
    </el-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
    };
  },
  props: {
    title: {
      type: String,
      default: "工单编号:",
    },
    html: {
      type: String,
      default: ":",
    },
  },

  created() {},

  methods: {
    enterFn() {
      this.$emit("enter", this.value);
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
  flex: 0.3;
}
.input {
  flex: 0.7;
}
</style>
