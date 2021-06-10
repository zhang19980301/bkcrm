<template>
  <div>
    <div class="login_backg"></div>
    <div>
      <ul>
        <li>网站后台管理系统</li>
        <li>
          <el-input
            type="text"
            placeholder="请输入账号"
            v-model="username"
          ></el-input>
        </li>
        <li>
          <el-input
            type="password"
            placeholder="请输入密码"
            v-model="password"
          ></el-input>
        </li>
        <!-- <li><el-input type="text" placeholder="请输入验证码" v-model="yan"></el-input></li> -->
        <li>
          <el-input placeholder="请输入验证码" v-model="yan">
            <template #suffix>
              <!-- <i class="el-input__icon el-icon-date"></i> -->
              <img :src="ysrc" alt="" @click="recode" />
            </template>
          </el-input>
        </li>
        <li>
          <el-button type="danger" @click="login">登录</el-button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
      yan: "",
      date: "",
      ysrc: ""
    };
  },
  created() {
    this.recode();
  },
  methods: {
    recode() {
      this.date = +new Date();
      if (process.env.NODE_ENV == "development") {
        this.ysrc = `https://2.0.0.31:4010/imgCode?date=${this.date}`;
      } else if (process.env.NODE_ENV == "production") {
        this.ysrc = `https://suqi.ltd:4010/imgCode?date=${this.date}`;
      }
    },
    login() {
      if (this.username == "") {
        this.$message({
          message: "用户名不能为空",
          type: "error",
          center: true
        });
      } else if (this.password == "") {
        this.$message({
          message: "密码不能为空",
          type: "error",
          center: true
        });
      } else if (this.yan == "") {
        this.$message({
          message: "验证码不能为空",
          type: "error",
          center: true
        });
      } else {
        let s = {
          username: this.username,
          password: this.$Md5s.encode(this.password),
          imgCode: this.yan,
          date: this.date
        };
        this.$HTTP({
          url: "/login",
          data: {
            s: this.$Md5s.encode(JSON.stringify(s))
          }
        })
          .then(res => {
            sessionStorage["userInfo"] = this.$Md5s.encode(
              JSON.stringify(res.data.obj)
            );
            this.$store.commit("setUserInfo", res.data.obj);
            this.$router.push("/");
          })
          .catch(err => {
            console.log(err);
            this.$message({
              message: err.data.message,
              type: "error",
              center: true
            });
            this.recode();
          });
      }
    }
  }
};
</script>

<style scoped>
.login_backg {
  background: url(../assets/images/banner.jpg) no-repeat;
  background-size: 100% 100%;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: -999;
}

.login_backg + div {
  width: 500px;
  height: 500px;
  background-color: #fff;
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: 0px 0px 10px #000;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}

.login_backg + div ul li:first-child {
  font-size: 23px;
  font-weight: 700;
}

.login_backg + div ul li {
  text-align: center;
  margin-top: 50px;
}

.login_backg + div ul li .el-input {
  width: 80%;
  margin: 0 auto;
}

.el-button {
  width: 80%;
}

img {
  margin-top: 5px;
}
</style>