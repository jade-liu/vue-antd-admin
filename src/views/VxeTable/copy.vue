<template>
  <vxe-table
    border
    show-overflow
    ref="xTable1"
    height="600"
    :row-config="{ isHover: true }"
    :show-footer="true"
    :footer-method="footerMethod"
  >
    <vxe-column type="seq" width="100"></vxe-column>
    <vxe-column
      field="name"
      title="Name"
      sortable
      :filters="[
        { label: '包含 6', value: '6' },
        { label: '包含 4', value: '4' },
      ]"
      :filter-method="filterNameMethod"
    ></vxe-column>
    <vxe-column field="username" title="Username" sortable></vxe-column>
    <vxe-column field="age" title="Age" sortable></vxe-column>
    <vxe-column field="depart" title="Depart" sortable></vxe-column>
    <vxe-column field="role" title="Role" sortable></vxe-column>
    <vxe-column
      field="sex"
      title="Sex"
      sortable
      :filters="[
        { label: 'Man', value: '1' },
        { label: 'Woman', value: '0' },
      ]"
      :filter-multiple="false"
    ></vxe-column>
  </vxe-table>
</template>

<script>
import XEUtils from "xe-utils";
export default {
  data() {
    return {
      colList: ["age"],
    };
  },
  mounted() {
    this.$nextTick(() => {
      const $table = this.$refs.xTable1;
      this.mockList(50000).then((data) => {
        if ($table) {
          $table.loadData(data);
        }
      });
    });
  },
  methods: {
    mockList(size) {
      return new Promise((resolve) => {
        const list = [];
        for (let index = 0; index < size; index++) {
          list.push({
            name: `名称${index}`,
            username: `账户${index}`,
            depart: `部门${index}`,
            sex: index % 2 === 0 ? "0" : "1",
            num: 123,
            age: 18,
            num2: 234,
            rate: 3,
            address: "shenzhen",
          });
        }
        resolve(list);
      });
    },
    filterNameMethod({ value, row }) {
      return XEUtils.toValueString(row.name).toLowerCase().indexOf(value) > -1;
    },
    filterRoleMethod({ option, row }) {
      return row.role === option.data;
    },
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
      const footerData = [
        columns.map((column, _columnIndex) => {
          if (_columnIndex === 0) {
            return "平均";
          }
          if (this.colList.includes(column.property)) {
            return this.meanNum(data, "age");
          }
          return null;
        }),
        columns.map((column, _columnIndex) => {
          if (_columnIndex === 0) {
            return "和值";
          }
          if (this.colList.includes(column.property)) {
            return this.sumNum(data, "age");
          }
          return null;
        }),
      ];
      return footerData;
    },
  },
};
</script>
