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
        <el-menu
          default-active="2"
          background-color="#001529"
          text-color="#fff"
          active-text-color="#ffd04b"
          style="width: 215px"
        >
          <router-link to="/antForm">
            <el-menu-item>
              <span slot="title">Ant Design Form测试</span>
            </el-menu-item>
          </router-link>
          <router-link to="/largeDataDomRenderTest">
            <el-menu-item>
              <span slot="title">大数据渲染bug修改</span>
            </el-menu-item>
          </router-link>
        </el-menu>
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
  ::v-deep .el-scrollbar__wrap {
    overflow-x: hidden;
  }
}
.main-content {
  background: #fff;
  padding: 10px;
}
</style>
