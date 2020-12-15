<template>
  <div class="home">
    <div class="tubiao"></div>
    <div class="a">迎挑战·抗击疫情夺胜利</div>
    <div class="a">抓机遇·推进医改展新姿</div>
    <div class="b">深圳市医院管理者协会质量与安全专业委员会第二届换届选举</div>
    <div class="c">暨医疗质量高峰论坛</div>
    <div class="d">
      邀请广东省病案质控中心主任、广东省医院评审评价中心副主任陈虹教授授课
    </div>
    <div class="i" style="font-size:18px">时间：2020年12月19日</div>
    <div class="i" style="font-size:18px">上午9:00-11:30</div>
    <div class="i">9:00-9:30 报到</div>
    <div class="i">9:30-10:00 换届选举</div>
    <div class="i">10:00-11:30 高峰论坛</div>
    <div class="i">地点：中山大学附属第八医院18楼多功能厅</div>
    <div class="e">
      <van-button type="danger" @click="submit()">点击填写入会申请单</van-button>
    </div>
    <div class="f">中国 · 深圳</div>
    <div class="g">深圳医院管理协会</div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    submit() {
      this.$router.push("/message");
    }
  }
};
</script>
<style scoped>
.home {
  background-color: #a11212;
  width: 100%;
  height: 100%;
  /* position: absolute;
  top: 50px; */
}
.tubiao {
  width: 80px;
  height: 80px;
  margin: 0px auto;
  background: url("tubiao.png");
}
.a {
  margin-top: 20px;
  color: white;
  display: flex;
  font-weight: bold;
  font-size: 18px;
  justify-content: center;
  text-shadow: 5px 5px 5px #473636;
}
.b {
  display: flex;
  justify-content: center;
  color: #b1b10f;
  font-weight: bold;
  font-size: 18px;
  margin-top: 30px;
  text-align: center;
}
.c {
  display: flex;
  justify-content: center;
  color: #b1b10f;
  font-weight: bold;
  font-size: 20px;
  margin-top: 20px;
}
.d {
  width: 90%;
  margin: 0 auto;
  color: #daee92;
  display: flex;
  justify-content: center;
  font-size: 13px;
  margin-top: 30px;
  text-align: center;
}
.h {
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  font-size: 13px;
}
.i {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  color: white;
}
.j {
  width: 50%;
  height: 80px;
  font-size: 15px;
  margin-left: 2px;
  color: white;
  /* background-color: yellowgreen; */
}
.h-1 {
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  font-size: 13px;
}
.i-1 {
  width: 16%;
  text-align: right;
  color: white;
}
.j-1 {
  width: 84%;
  color: white;
}
.e {
  width: 180px;
  height: 50px;
  color: hsl(0, 0%, 80%);
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}
.f {
  /* position: absolute;
  bottom: 28px;
  left: 50%;
  transform: translateX(-50%); */
  text-align: center;
  color: hsl(60, 84%, 70%);
}
.g {
  /* position: absolute;
  bottom: 5px;
  left: 50%;
  transform: translateX(-50%); */
  text-align: center;
  color: hsl(60, 84%, 70%);
  /* margin-bottom: 100px; */
}
</style>
