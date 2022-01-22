<template>
  <div class="main">
    <el-button type="primary">新建人员</el-button>
    <!-- 人员列表 -->
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="id" label="ID" width="180"> </el-table-column>
      <el-table-column prop="loginName" label="登录名称" width="180"> </el-table-column>
      <el-table-column prop="nicName" label="昵称"> </el-table-column>
      <el-table-column label="操作"> 
        <el-button>编辑</el-button>
        <el-button type="danger">删除</el-button>
      </el-table-column>
    </el-table>
    <el-pagination
      v-model:currentPage="currentPage"
      :hide-on-single-page="total==1?true:false"
      :page-sizes="[10, 50, 200, 500]"
      :page-size="10"
      layout="total, prev, pager, next, sizes, jumper"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      currentPage:1,
      pageSize: 10,
      total: 0
    };
  },
  async created() {
    this.getAllUsers()
  },
  methods: {
    /**
     * 分页获取所有用户信息
     */
    async getAllUsers(){
      let obj = await this.$HTTP({ url: "/getAllUsers", data: {pagelist: this.pageSize, pageNo: this.currentPage} })
      this.total = obj.totle
      this.tableData = obj.data
    },
    /**
     * 切换一页展示多少条
     */
    async handleSizeChange(pageSize){
      this.pageSize = pageSize
      this.getAllUsers()
    },
    /**
     * 更改当前的选中页数
     */
    async handleCurrentChange(currentPage){
      this.currentPage = currentPage
      this.getAllUsers()
    }
  },
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