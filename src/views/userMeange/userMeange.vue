<template>
  <div class="main">
    <el-button type="primary" @click="drawer = true">新建人员</el-button>
    <!-- 人员列表 -->
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="id" label="ID" width="180"> </el-table-column>
      <el-table-column prop="loginName" label="登录名称" width="180">
      </el-table-column>
      <el-table-column prop="nicName" label="昵称"> </el-table-column>
      <el-table-column label="操作">
        <el-button>编辑</el-button>
        <el-button type="danger">删除</el-button>
      </el-table-column>
    </el-table>
    <el-pagination
      v-model:currentPage="currentPage"
      :hide-on-single-page="total <= 1 ? true : false"
      :page-sizes="[10, 50, 200, 500]"
      :page-size="10"
      layout="total, prev, pager, next, sizes, jumper"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    >
    </el-pagination>
    <el-drawer v-model="drawer" :before-close="guanbi" :show-close="false" direction="rtl">
      <template #title>
        <h4>新建人员</h4>
      </template>
      <template #default>
        <el-form
          label-position="right"
          label-width="100px"
          :model="person"
          style="max-width: 460px"
        >
          <el-form-item label="昵称">
            <el-input autocomplete="off" clearable v-model="person.nicName"></el-input>
          </el-form-item>
          <el-form-item label="登录名称">
            <el-input autocomplete="off" clearable v-model="person.loginName"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input type="password" show-password clearable autocomplete="new-password" v-model="person.password"></el-input>
          </el-form-item>
          <el-form-item label="邮箱">
            <el-input autocomplete="off" clearable v-model="person.eimal"></el-input>
          </el-form-item>
          <el-form-item label="邮箱验证码">
            <el-input autocomplete="off" clearable v-model="person.eimalyan">
              <template #suffix>
                <div class="cu" @click="sendEmail">{{text}}</div>
              </template>
            </el-input>
          </el-form-item>
        </el-form>
        <div
          style="
            flex: auto;
            position: absolute;
            left: 50%;
            bottom: 0;
            -webkit-transform: translateX(-50%) translateY(-50%);
          "
        >
          <el-button @click="cancelClick">取消</el-button>
          <el-button type="primary" @click="adduser">保存</el-button>
        </div>
      </template>
    </el-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      currentPage: 1,
      pageSize: 10,
      total: 0,
      drawer: false,
      person:{
        loginName: '',
        eimal: '',
        password: '',
        nicName: '',
        eimalyan: ''
      },
      text:'发送验证码'
    };
  },
  async created() {
    this.getAllUsers();
  },
  methods: {
    /**
     * 分页获取所有用户信息
     */
    async getAllUsers() {
      let obj = await this.$HTTP({
        url: "/getAllUsers",
        data: { pagelist: this.pageSize, pageNo: this.currentPage },
      });
      this.total = obj.totle;
      this.tableData = obj.data;
    },
    /**
     * 切换一页展示多少条
     */
    async handleSizeChange(pageSize) {
      this.pageSize = pageSize;
      this.getAllUsers();
    },
    /**
     * 更改当前的选中页数
     */
    async handleCurrentChange(currentPage) {
      this.currentPage = currentPage;
      this.getAllUsers();
    },
    /**
     * 添加用户
     */
    adduser(){
      // console.log(this.person)
    },
    cancelClick(){
      this.drawer = false
    },
    /**
     * 发送邮箱验证码
     */
    sendEmail(){
      this.test = '60s后重新发送验证码'
    },
    guanbi(){
      // console.log(e)
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
.el-table {
  margin-top: 20px;
}
.cu{
  cursor: pointer;
  color: #606266;
  -moz-user-select: none;
  -khtml-user-select: none;
  user-select: none;
}
</style>