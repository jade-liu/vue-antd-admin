<!--
* @Name：
* @Author: 刘玉
* @Date: 2022-01-06 18:55:11
* @Last Modified by: 刘玉
* @Last Modified time: 2022-01-06 18:55:11
-->
<script>
import test from './test'
export default {
  name: "",
  components: {
    test
  },
  data() {
    return {
      testValue: {
        value1: '123',
        value2: '456',
        type: 'password',
        href: 'wwww.baidu.com'
      }
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
  render(h) {
    return <test {...{ props: this.testValue }} />
    //   const height = document.documentElement.clientHeight;
    //   const data = { style: {height: height, width: '300px', background: 'pink'} }
      // return h('div', { style: {height: '200px', width: '300px', background: 'pink'} }, '1111')
      // return h('el-link', { attrs: { 'href': 'wwww.baidu.com', target: '_blank', type: 'primary', underline: true} }, '1111111')
      
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
//
</style>
