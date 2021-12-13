<template>
  <div>
    <el-table
      ref="table"
      :data="tableData"
      border
      height="600px"
      style="width: 100%; margin-top: 10px"
    >
      <el-table-column label="姓名" prop="name" width="100px" align="center">
        <template slot-scope="scope">
          <el-input v-model="scope.row.name"></el-input>
        </template>
      </el-table-column>
      <el-table-column
        label="账户"
        prop="username"
        width="100px"
        align="center"
      >
        <template slot-scope="scope">
          <el-input v-model="scope.row.username"></el-input>
        </template>
      </el-table-column>
      <el-table-column label="性别" prop="sexual" width="100px" align="center">
        <template slot-scope="scope">
          <el-input v-model="scope.row.sexual"></el-input>
        </template>
      </el-table-column>
      <el-table-column label="角色" prop="groupName" align="center">
        <template slot-scope="scope">
          <el-input v-model="scope.row.groupName"></el-input>
        </template>
      </el-table-column>
      <el-table-column label="部门" prop="depart" align="center">
        <template slot-scope="scope">
          <el-input v-model="scope.row.depart"></el-input>
        </template>
      </el-table-column>
      <el-table-column label="职位" prop="position" align="center">
        <template slot-scope="scope">
          <el-input v-model="scope.row.position"></el-input>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="120px" align="center">
        <template>
          <el-button type="text">修改</el-button>
          <el-button type="text" style="color: red">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <timer-dialog
      v-if="dialogVisible"
      :visible.sync="dialogVisible"
      @close-dialog="dialogVisible = false"
    ></timer-dialog>
  </div>
</template>

<script>
export default {
  name: "Practice",
  components: {
    "timer-dialog": () => import("./TimerDialog"),
  },
  data() {
    return {
      dialogVisible: false,
      pageIndex: 1,
      totalPage: 0, // 总页数
      tableData: [],
      totalData: [],
    };
  },
  created() {
    this.dialogVisible = true;
  },
  mounted() {
    this.getList();
  },
  methods: {
    async getList() {
      const response = await this.$request({
        method: "get",
        url: "/api/moreData/page",
      });
      this.totalData = response.data;
      this.totalPage = Math.ceil(response.data.length / 50);
      // 页面首次渲染50条数据
      this.tableData = response.data.slice(0, 50);
      // 监听滚动事件，滚动时渲染数据
      const dom = this.$refs.table.bodyWrapper;
      dom.addEventListener("scroll", () => {
        const scrollDistance =
          dom.scrollHeight - dom.scrollTop - dom.clientHeight;
        if (scrollDistance <= 1) {
          if (this.pageIndex >= this.totalPage) {
            this.$message.warning("我~是有底线的 (～￣▽￣)～");
          }
          if (this.pageIndex < this.totalPage) {
            const sliceData = this.totalData.slice(
              this.pageIndex * 50,
              (this.pageIndex + 1) * 50
            );
            this.tableData = [...this.tableData, ...sliceData];
            this.pageIndex++; //当前页数自增
          }
        }
      });
    },
  },
};
</script>
