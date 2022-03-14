<!--
* @Name：事件冒泡
* @Author: 刘玉
* @Date: 2022-03-10 18:26:07
* @Last Modified by: 刘玉
* @Last Modified time: 2022-03-10 18:26:07
-->
<template>
  <div id="outer" class="outer" @click="clickOuter">
    outer
    <div id="middle" class="middle" @click="clickMiddle">
      middle
      <div id="inner" class="inner" @click="clickInner">inner</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    clickOuter() {
      console.log("clickOuter");
    },
    clickMiddle() {
      console.log("clickMiddle");
    },
    clickInner() {
      console.log("clickInner");
    },
  },
};
</script>

<style lang="scss" scoped>
.outer {
  width: 300px;
  height: 300px;
  background-color: red;
  font-weight: bold;
}
.middle {
  width: 200px;
  height: 200px;
  background-color: purple;
  font-weight: bold;
}
.inner {
  width: 100px;
  height: 100px;
  background-color: yellow;
  font-weight: bold;
}
</style>
