<!--
* @Name：
* @Author: 刘玉
* @Date: 2022-03-17 15:35:41
* @Last Modified by: 刘玉
* @Last Modified time: 2022-03-17 15:35:41
-->
<template>
  <div>
    <Nested :tasks="tasks" />
  </div>
</template>

<script>
export default {
  name: "",
  components: {
    Nested: () => import("@/components/Nested/index"),
  },
  data() {
    return {
      tasks: [
        { name: "1", marginLeft: "20px", border: "1px solid #000" },
        { name: "2", marginLeft: "20px", border: "1px solid #000" },
        {
          name: "3",
          marginLeft: "20px",
          border: "1px solid #000",
          tasks: [
            {
              tasks: [
                {
                  name: "aaaaaa",
                  marginLeft: "40px",
                  border: "1px solid #409eff",
                },
                {
                  name: "bbbbbb",
                  marginLeft: "40px",
                  border: "1px solid #409eff",
                },
                {
                  name: "cccccc",
                  marginLeft: "40px",
                  border: "1px solid #409eff",
                  tasks: [
                    {
                      name: "哈哈哈哈",
                      marginLeft: "60px",
                      border: "1px solid purple",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
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
