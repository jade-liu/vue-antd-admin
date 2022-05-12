<!--
* @Name：嵌套
* @Author: 刘玉
* @Date: 2022-03-17 15:32:18
* @Last Modified by: 刘玉
* @Last Modified time: 2022-03-17 15:32:18
-->
<template>
  <div>
    <div
      v-for="el in tasks"
      :key="el.name"
      :style="{ marginLeft: el.marginLeft, border: el.border }"
    >
      <p>{{ el.name }}</p>
      <Nested :tasks="el.tasks" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Nested",
  components: {},
  data() {
    return {};
  },
  props: ["tasks"],
  computed: {},
  watch: {},
  created() {
    //
  },
  mounted() {
    //
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
//
</style>
