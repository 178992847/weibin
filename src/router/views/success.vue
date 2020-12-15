<!--
 * @Author: 王伟斌
 * @Date: 2020-12-11 17:10:01
 * @LastEditors: 王伟斌
 * @LastEditTime: 2020-12-14 14:44:56
 * @FilePath: \weibin\src\router\views\success.vue
-->
<template>
  <div class="container">
    <div class="success"></div>
    <div class="submit">提交成功!</div>
    <div class="a-1">感谢您对专委会的支持!</div>
    <div class="a-1">欢迎您的加入！期待您的参加！</div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    // setTimeout(()=>{
    //   this.$router.push('/')
    // },2000)
  },
  methods: {}
};
</script>
<style scoped>
.container {
  background-color: hsl(0, 80%, 35%);
  color: white;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
}
.success {
  width: 100px;
  height: 100px;
  margin: 20px auto;
  background: url("success.png");
}
.submit {
  display: flex;
  justify-content: center;
  margin-top: 10px;
  font-weight: bold;
}
.a-1 {
  font-weight: bold;
  text-align: center;
  margin-top: 10px;
}
</style>
