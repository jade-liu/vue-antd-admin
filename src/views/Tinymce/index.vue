<!--
* @Name：
* @Author: 刘玉
* @Date: 2022-05-26 13:39:21
* @Last Modified by: 刘玉
* @Last Modified time: 2022-05-26 13:39:21
-->
<template>
  <!-- <div><Tinymce v-model="test" /></div> -->
  <div>
    <TinymceEditor v-model="content"></TinymceEditor>
  </div>
</template>

<script>
import TinymceEditor from "@/components/tinymce/Tinymce";
export default {
  name: "",
  components: {
    TinymceEditor,
  },
  data() {
    return {
      content: "",
    };
  },
  props: {},
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
