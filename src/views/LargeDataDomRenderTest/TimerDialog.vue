<template>
  <el-dialog title="提示" :visible.sync="visible" width="30%">
    <span>这是一段信息</span>
    <span slot="footer" class="dialog-footer">
      <el-button @click="visible = false">取 消</el-button>
      <el-button type="primary" @click="$emit('close-dialog')">{{
        timerNum > 0 ? timerNum : "确定"
      }}</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  data() {
    return {
      timerNum: 5, // 倒计时Number
    };
  },
  props: ["visible"],
  mounted() {
    this.visible = true;
    const timer = setInterval(() => {
      this.timerNum--;
      if (this.timerNum < 1) {
        clearInterval(timer);
      }
    }, 1000);
  },
};
</script>
