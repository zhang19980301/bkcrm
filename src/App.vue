<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  created() {
    if (sessionStorage["userInfo"]) {
      this.$store.commit(
        "setUserInfo",
        JSON.parse(this.$Md5s.decode(sessionStorage["userInfo"]))
      );
    }
    window.addEventListener("beforeunload", () => {
      sessionStorage["userInfo"] = this.$Md5s.encode(
        JSON.stringify(this.$store.state)
      );
    });
    delete sessionStorage["userInfo"];
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
