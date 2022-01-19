<!--
* @Name：Layout
* @Author: 刘玉
* @Date: 2021-11-18 10:20:41
* @Last Modified by: 刘玉
* @Last Modified time: 2021-11-18 10:20:41
-->
<template>
  <div class="app-container">
    <div class="header">
      <img src="../../assets/logo.png" height="38px" width="38px" />
      <div>组件测试</div>
    </div>
    <div class="container">
      <div class="sidebar">
        <a-menu
          style="width: 215px"
          :default-selected-keys="['1']"
          :default-open-keys="['sub1']"
          mode="inline"
          theme="dark"
          :selected-keys="[selectedKey]"
          @click="changeMenu"
        >
            <a-menu-item key="antForm">
              Ant Design Form测试
            </a-menu-item>
            <a-menu-item key="largeDataDomRenderTest">
              大数据渲染bug修改
            </a-menu-item>
            <a-menu-item key="testRender">
              测试render
            </a-menu-item>
            <a-menu-item key="antdTable">
              Ant Design Table测试
            </a-menu-item>
        </a-menu>
      </div>
      <el-scrollbar class="scrollbar">
        <div class="main-content">
          <router-view />
        </div>
      </el-scrollbar>
    </div>
  </div>
</template>

<script>
export default {
  name: "Layout",
  data() {
    return {
      selectedKey: ''
    }
  },
  methods: {
     changeMenu(e) {
       this.selectedKey = e.key
       this.$router.push(`/${e.key}`)
     }
  },
};
</script>
<style lang="scss" scoped>
.app-container {
  width: 100%;
  height: 100vh;
}
.header {
  display: flex;
  height: 48px;
  background: #f6f7f9;
  padding: 0 10px;
  line-height: 48px;
  font-size: 16px;
  font-weight: bold;
  color: #001529;
  align-items: center;
  div {
    display: inline-block;
    margin-left: 10px;
  }
}
.container {
  height: calc(100vh - 48px);
  display: flex;
}
.sidebar {
  height: 100%;
  width: 215px;
  background: #001529;
}
.scrollbar {
  height: calc(100vh - 48px);
  width: 100%;
  ::v-deep .a-scrollbar__wrap {
    overflow-x: hidden;
  }
}
.main-content {
  background: #fff;
  padding: 10px;
}
</style>
