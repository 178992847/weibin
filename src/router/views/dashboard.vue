<template>
    <div class="home">
        <div class="tubiao"></div>
        <div class="a">迎挑战·抗击疫情夺胜利</div>
        <div class="a">抓机遇·推进医改展新姿</div>
        <div class="b">第三届现代医院管理高峰论坛</div>
        <div class="c">暨协会年度会员代表大会</div>
        <div class="d">2020年12月12日-18日</div>
        <div class="e">
            <van-button type="danger" @click="submit()">点击填写入会申请单
        </van-button></div>
        <div class="f">中国 · 深圳</div>
        <div class="g">深圳医院管理协会</div>
        
    </div>
</template>
<script>
export default {
    data() {
        return{}
    },
    methods:{
        submit() {
            this.$router.push('/home')
        }
    }
}
</script>
<style>
.home{
    background-color: hsl(0, 80%, 35%);
    /* height: 600px; */
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
}
.tubiao{
  width: 80px;
  height: 80px;
  margin: 0px auto;
  background: url("tubiao.png");
}
.a{
    margin-top: 20px;
    color:white;
    display: flex;
    font-weight: bold;
    font-size: 18px;
    justify-content: center;
    text-shadow: 5px 5px 5px #473636;
}
.b{
      display: flex;
      justify-content: center;
      color: #b1b10f;
      font-weight: bold;
      font-size: 20px;
      margin-top: 40px;
}
.c{
      display: flex;
      justify-content: center;
      color: #b1b10f;
      font-weight: bold;
      font-size: 20px;
      margin-top: 20px;
}
.d{
      display: flex;
      justify-content: center;
      color: white;
      font-size: 16px;
      margin-top: 30px;
}
.e{
    width: 180px;
    height: 50px;
    color: hsl(0, 0%, 80%);
    margin: 40px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
}
.f{
     display: flex;
      justify-content: center;
      color: hsl(60, 84%,70%);
}
.g{
     display: flex;
      justify-content: center;
      color: hsl(60, 84%,70%);
      margin-top: 20px;
      padding-bottom: 20px;
}
</style>