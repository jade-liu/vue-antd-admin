<!--
* @Name：Vxe Table测试
* @Author: 刘玉
* @Date: 2022-01-20 16:08:03
* @Last Modified by: 刘玉
* @Last Modified time: 2022-01-20 16:08:03
-->
<template>
  <vxe-grid ref="xGrid2" v-bind="gridOptions2"></vxe-grid>
</template>

<script>
import Sortable from "sortablejs";

export default {
  data() {
    return {
      gridOptions2: {
        border: true,
        columnKey: true,
        showFooter: true,
        class: "sortable-column-demo",
        scrollX: {
          enabled: false,
        },
        footerMethod: this.footerMethod,
        toolbarConfig: {
          custom: true,
        },
        columns: [
          { field: "name", title: "Name", fixed: "left", minWidth: 200 },
          { field: "role", title: "Role", minWidth: 220 },
          { field: "sex", title: "Sex", minWidth: 100 },
          { field: "age", title: "Age", minWidth: 150 },
          { field: "date3", title: "Date", fixed: true, minWidth: 200 },
          {
            field: "address",
            title: "Address",
            minWidth: 200,
            showOverflow: true,
          },
        ],
        data: [
          {
            id: 10001,
            name: "Test1",
            nickname: "T1",
            role: "Develop",
            sex: "Man",
            age: 28,
            address: "Shenzhen",
          },
          {
            id: 10002,
            name: "Test2",
            nickname: "T2",
            role: "Test",
            sex: "Women",
            age: 22,
            address: "Guangzhou",
          },
          {
            id: 10003,
            name: "Test3",
            nickname: "T3",
            role: "PM",
            sex: "Man",
            age: 32,
            address: "Shanghai",
          },
          {
            id: 10004,
            name: "Test4",
            nickname: "T4",
            role: "Designer",
            sex: "Women",
            age: 23,
            address: "Shenzhen",
          },
          {
            id: 10005,
            name: "Test5",
            nickname: "T5",
            role: "Develop",
            sex: "Women",
            age: 30,
            address: "Shanghai",
          },
        ],
      },
    };
  },
  created() {
    this.columnDrop2();
  },
  beforeDestroy() {
    if (this.sortable2) {
      this.sortable2.destroy();
    }
  },
  methods: {
    meanNum(list, field) {
      let count = 0;
      list.forEach((item) => {
        count += Number(item[field]);
      });
      return count / list.length;
    },
    sumNum(list, field) {
      let count = 0;
      list.forEach((item) => {
        count += Number(item[field]);
      });
      return count;
    },
    footerMethod({ columns, data }) {
      return [
        columns.map((column, columnIndex) => {
          if (columnIndex === 0) {
            return "平均";
          }
          if (["age", "sex"].includes(column.property)) {
            return this.meanNum(data, column.property);
          }
          return null;
        }),
        columns.map((column, columnIndex) => {
          if (columnIndex === 0) {
            return "和值";
          }
          if (["age", "sex"].includes(column.property)) {
            return this.sumNum(data, column.property);
          }
          return null;
        }),
      ];
    },
    columnDrop2() {
      this.$nextTick(() => {
        const $table = this.$refs.xGrid2;
        this.sortable2 = Sortable.create(
          $table.$el.querySelector(
            ".body--wrapper>.vxe-table--header .vxe-header--row"
          ),
          {
            handle: ".vxe-header--column:not(.col--fixed)",
            onEnd: ({ item, newIndex, oldIndex }) => {
              const { fullColumn, tableColumn } = $table.getTableColumn();
              const targetThElem = item; // 要移动的列（真实DOM）
              const wrapperElem = targetThElem.parentNode; // 所有的列（真实DOM）
              const newColumn = fullColumn[newIndex]; // 目标位置现有的列（虚拟DOM）
              if (newColumn.fixed) {
                // 错误的移动
                // ------>
                if (newIndex > oldIndex) {
                  wrapperElem.insertBefore(
                    targetThElem,
                    wrapperElem.children[oldIndex]
                  );
                // <------
                } else {
                  wrapperElem.insertBefore(
                    wrapperElem.children[oldIndex],
                    targetThElem
                  );
                }
                return this.$message.warning('固定列不允许拖动！');
              }
              // 转换真实索引
              const oldColumnIndex = $table.getColumnIndex(
                tableColumn[oldIndex]
              );
              const newColumnIndex = $table.getColumnIndex(
                tableColumn[newIndex]
              );
              // 移动到目标列
              const currRow = fullColumn.splice(oldColumnIndex, 1)[0];
              fullColumn.splice(newColumnIndex, 0, currRow);
              $table.loadColumn(fullColumn);
            },
          }
        );
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.sortable-column-demo .vxe-header--row .vxe-header--column.sortable-ghost,
.sortable-column-demo .vxe-header--row .vxe-header--column.sortable-chosen {
  background-color: #dfecfb;
}
.sortable-column-demo .vxe-header--row .vxe-header--column.col--fixed {
  cursor: no-drop;
}
</style>
