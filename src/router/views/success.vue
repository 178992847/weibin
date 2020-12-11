<!--
 * @Author: 王伟斌
 * @Date: 2020-12-11 17:10:01
 * @LastEditors: 王伟斌
 * @LastEditTime: 2020-12-11 17:25:53
 * @FilePath: \mobile\src\components\success.vue
-->
<template>
  <div>
    <div class="success"></div>
    <div class="submit">提交成功!</div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    setTimeout(()=>{
      this.$router.push('/')
    },2000)
  },
  methods: {},
};
</script>
<style>
.success {
  width: 100px;
  height: 100px;
  margin: 0 auto;
  background: url("success.png");
}
.submit{
  display: flex;
  justify-content: center;
  margin-top: 10px;
  font-weight: bold;
}
</style>