<template>
  <div>
      <!-- isActive, isExactActive -->
      <router-link to="/about/login" custom v-slot="{ href, route, navigate,  }">
        <li :href="href" @click="navigate">{{route.name}}</li>
      </router-link>
      <router-link to="/about/login2" custom v-slot="{ href, route, navigate,  }">
        <li :href="href" @click="navigate">{{route.name}}</li>
      </router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
li{
    height: 60px;
    line-height: 60px;
    background: #ccc;
}
li:not(:first-child){
  margin-top: 10px;
}
</style>