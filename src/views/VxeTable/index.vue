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
      v-for="(column, index) in columns"
      :key="`${column.field}_${index}`"
      :field="column.field"
      :title="column.title"
      :sortable="column.sortable === false ? false : true"
      :filters="column.filters"
      :filter-method="
        ({ option, value, row }) => filterMethod(option, value, row, column)
      "
    >
      <template v-if="column.type === 'text'" #filter="{ $panel, column }">
        <input
          :type="column.type"
          v-for="(option, index) in column.filters"
          :key="index"
          v-model="option.data"
          v-bind="column.props"
          @input="$panel.changeOption($event, !!option.data, option)"
        />
      </template>
    </vxe-column>
  </vxe-table>
</template>

<script>
export default {
  data() {
    return {
      columns: [],
      filterProps: {
        week: { startDay: "0" },
        month: { valueFormat: "yyyy-MM-dd" },
      },
    };
  },
  mounted() {
    this.$nextTick(() => {
      const $table = this.$refs.xTable1;
      this.mockList(5000).then((data) => {
        const columns = [
          {
            field: "name",
            title: "Name",
            type: "text",
          },
          {
            field: "username",
            title: "Username",
            type: "text",
          },
          {
            field: "gender",
            title: "Gender",
            type: "checkbox",
            filters: [
              { label: "男", value: "男" },
              { label: "女", value: "女" },
            ],
            sortable: false,
          },
          {
            field: "depart",
            title: "Depart",
            type: "checkbox",
          },
          {
            field: "userType",
            title: "User Type",
            type: "checkbox",
          },
          {
            field: "identity",
            title: "Identity",
            type: "checkbox",
          },
          {
            field: "age",
            title: "Age",
            type: "text",
          },
          {
            field: "date",
            title: "Date",
            type: "text",
          },
        ];
        this.geneColumn(columns, data);
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
            name: `用户${index}`,
            username: `user${index}`,
            gender: "女",
            depart: "产品研发部",
            userType: "内部用户",
            identity: "普通用户",
            age: 26,
            date: "2022-11-18",
          });
        }
        resolve(list);
      });
    },
    geneColumn(columns, data) {
      this.columns = columns.map((column) => {
        if (!column.filters) {
          if (column.type === "checkbox") {
            column.filters = this.geneFilters(data, column.field);
          } else {
            column.filters = [{ data: "" }];
          }
        }
        column.props = { ...this.filterProps[column.type], ...column.props };
        return column;
      });
    },
    geneFilters(data, field) {
      const filters = [];
      data.forEach((row) => {
        if (
          row[field] &&
          filters.findIndex((el) => el.value === row[field]) === -1
        ) {
          filters.push({ label: row[field], value: row[field] });
        }
      });
      return filters;
    },
    filterMethod(option, value, row, column) {
      const data = column.type === "checkbox" ? value : option.data;
      if (column.filterMethod) {
        return column.filterMethod(data, row, column);
      }
      if (typeof row[column.field] === "number") {
        return row[column.field] === Number(data);
      }
      return row[column.field].indexOf(data) !== -1;
    },
    meanNum(list, field) {
      let count = 0;
      for (let index = 0; index < list.length; index++) {
        const item = list[index];
        if (isNaN(Number(item[field]))) {
          return false;
        }
        count += Number(item[field]);
      }
      return count / list.length;
    },
    sumNum(list, field) {
      let count = 0;
      for (let index = 0; index < list.length; index++) {
        const item = list[index];
        if (isNaN(Number(item[field]))) {
          return false;
        }
        count += Number(item[field]);
      }
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
          if (this.sumNum(data, column.property)) {
            return this.meanNum(data, column.property);
          }
          return null;
        }),
        columns.map((column, _columnIndex) => {
          if (_columnIndex === 0) {
            return "和值";
          }
          if (this.sumNum(data, column.property)) {
            return this.sumNum(data, column.property);
          }
          return null;
        }),
      ];
      return footerData;
    },
  },
};
</script>
<style lang="scss" scoped>
::v-deep.vxe-table--render-default .vxe-body--column.col--ellipsis {
  height: 28px !important;
}
::v-deep.vxe-table--render-default .vxe-header--column:not(.col--ellipsis) {
  padding: 10px 5px;
}
::v-deep.vxe-table--render-default .vxe-footer--column:not(.col--ellipsis) {
  padding: 5px 0;
}
</style>
