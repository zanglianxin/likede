<template>
  <div class="btn" :style="style">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data () {
    return {
        style: {
            backgroundColor: this.bgcolor,
            color: this.fscolor,
            fontSize: this.fs
        }
    }
  },
  props: {
    bgcolor: {
        type: String,
        default: '#5f84ff'
    },
    fscolor: {
        type: String,
        default: '#fff'
    },
    fs: {
        type: String,
        default: '14px'
    }
  },

  created () {

  },

  methods: {

  }
}
</script>

<style scoped>
.btn {
    width: 80px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
}
</style>
