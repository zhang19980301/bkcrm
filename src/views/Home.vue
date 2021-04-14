<template>
  <div class="home">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside style="width:200px;"><nav-left></nav-left></el-aside>
        <el-main><router-view></router-view></el-main>
      </el-container>
    </el-container>
    <!-- <router-link to="/login" custom v-slot="{ href, route, navigate, isActive, isExactActive }">
    <li
        :class="[
          isActive && 'router-link-active',
          isExactActive && 'router-link-exact-active'
        ]"
        :href="href" @click="navigate"
      >
      {{ route.name }}
      </li>
    </router-link> -->
  </div>
</template>

<script>
import navLeft from "@/components/navleft";
export default {
  name: "Home",
  components: {
    navLeft
  },
  created() {
    //  在页面刷新之前把 store中的数据存在sessionStorage中  刷新完成之后把存到值取出来  再次进行存储
    this.$store.commit("setUserInfo", JSON.parse(this.$Md5s.decode(sessionStorage['userInfo'])));
    window.addEventListener("beforeunload", () => {
      sessionStorage['userInfo']=this.$Md5s.encode(JSON.stringify(this.$store.state))
    });
  }
};
</script>


<style scoped>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
  padding: 0;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  position: absolute;
  bottom: 0;
  top: 60px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
  position: absolute;
  bottom: 0;
  top: 60px;
  left: 200px;
  right: 0;
}
li {
  height: 50px;
  line-height: 50px;
}
</style>
