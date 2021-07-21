<template>
  <div>
    <MusicPlayer :songLists="songLists" @change="change"></MusicPlayer>
  </div>
</template>
<script>
import MusicPlayer from "./component/MusicPlayer.vue";
export default {
  props: [],
  components: {
    MusicPlayer
  },
  data() {
    return {
      songLists: []
    };
  },
  created() {
    this.$HTTP({
      url: "/getAllMusic"
    }).then(res => {
      res.data.data.forEach(item => {
        if(process.env.NODE_ENV === "development"){
          item.cover = `https://192.168.11.43:4010/getMusicImg?name=${item.name}`;
          item.url = `https://192.168.11.43:4010/music/${item.name}`;
        }else{
          item.cover = `https://suqi.ltd:4010/getMusicImg?name=${item.name}`;
          item.url = `https://suqi.ltd:4010/music/${item.name}`;
        }
      });
      console.log(res);
      this.songLists = [...res.data.data];
    });
  },
  methods: {
    change() {}
  },
  mounted() {
    // 音乐列表
  }
};
</script>