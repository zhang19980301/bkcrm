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
          // item.cover = `https://127.0.0.1:4010/getMusicImg?name=${item.title}`;
          let bytes = new Uint8Array(item.picture);
          let storeData = "";
          let len = bytes.byteLength;
          for (let i = 0; i < len; i++) {
              storeData += String.fromCharCode(bytes[i]);
          }
          let code='data:image/png;base64,'+ window.btoa(storeData);
          item.cover = code
          item.url = `https://127.0.0.1:4010/music/${item.title}`;
        }else{
          let bytes = new Uint8Array(item.picture);
          let storeData = "";
          let len = bytes.byteLength;
          for (let i = 0; i < len; i++) {
              storeData += String.fromCharCode(bytes[i]);
          }
          let code='data:image/png;base64,'+ window.btoa(storeData);
          item.cover = code
          item.url = `https://zzzsuqi.cn:4010/music/${item.name}`;
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