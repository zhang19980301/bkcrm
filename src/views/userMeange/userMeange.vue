<template>
  <div class="main">
    <el-button type="primary">新建人员</el-button>
    <!-- 人员列表 -->
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
      <el-table-column label="操作"> 
        <el-button>编辑</el-button>
        <el-button type="danger">删除</el-button>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  methods: {},
  async created() {
    let obj = await this.$HTTP({ url: "/getAllUsers", data: {pagelist: 10, pageNo: 1} })
    console.log(obj)
    // this.$
  }
};
</script>

<style scoped>
div.main {
  text-align: left;
  line-height: 100% !important;
  /* overflow-y: scroll; */
}
.el-table{
  margin-top: 20px;
}
</style>