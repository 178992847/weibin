<!--
 * @Author: 王伟斌
 * @Date: 2020-12-13 11:29:52
 * @LastEditors: 王伟斌
 * @LastEditTime: 2020-12-15 09:28:07
 * @FilePath: \weibin\src\App.vue
-->
<template>
  <div id="app">
    <div class="music" id="changecolor">
      <div :class="show ? 'musicicon stop' : 'musicicon'" @click="stop()"></div>
    </div>
    <router-view />
    <audio
      id="audios"
      src="../public/test.mp3"
      autoplay="autoplay"
      loop="loop"
    ></audio>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      show: false
    };
  },
  watch: {
    $route(route) {
      if (route.name == "home") {
        document.getElementById("changecolor").style.backgroundColor = 'white'
      } else {
        document.getElementById("changecolor").style.backgroundColor = '#a11212'
      }
    }
  },
  mounted() {
    document.addEventListener("WeixinJSBridgeReady", function() {
      document.getElementById("audios").play();
    });
  },
  methods: {
    stop() {
      this.show = !this.show;
      var video = document.getElementById("audios");
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    }
  }
};
</script>

<style>
.music {
  width: 100%;
  height: 50px;
  position: relative;
  background-color: #a11212;
}
.musicicon {
  position: absolute;
  right: 10px;
  width: 50px;
  height: 50px;
  background: url("../public/music.png");
  animation: move 3s linear infinite;
}
@keyframes move {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.stop {
  animation-play-state: paused;
}
.backcolor {
  background-color: #a11212;
}
</style>
