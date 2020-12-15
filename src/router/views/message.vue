<!--
 * @Author: 王伟斌
 * @Date: 2020-12-13 14:02:16
 * @LastEditors: 王伟斌
 * @LastEditTime: 2020-12-15 09:48:13
 * @FilePath: \weibin\src\router\views\message.vue
-->
<template>
  <div class="container">
    <div class="all">
      <div class="youyi">请有意成为第二届会员的人员，进入下一页填写表格：</div>
      <div class="tishi">温馨提示：</div>
      <div class="tishi">入会资格：</div>
      <div class="lizi">
        <div class="lizi1">1、</div>
        <div class="lizi2">会员条件为广大医务人员和管理者；</div>
      </div>
      <div class="lizi">
        <div class="lizi1">2、</div>
        <div class="lizi2">
          委员条件为临床医技科室中级职称及以上，职能部门中层干部或者工作3年以上，硕士研究生及以上，特别优秀者可以放宽。
        </div>
      </div>
      <div class="e">
        <van-button type="danger" @click="submit()">已读，填写入会申请表</van-button
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    submit() {
      this.$router.push("/home")
    }
  }
};
</script>
<style scoped>
.container {
  background-color: hsl(0, 80%, 35%);
  color: #b1b10f;
  width: 100%;
  height: 91%;
  position: absolute;
  top: 50px;
}
.all {
  margin-left: 10px;
}
.youyi {
  font-weight: bold;
  margin-top: 20px;
}
.tishi {
  margin-top: 10px;
}
.one {
  margin-top: 10px;
}
.lizi {
  display: flex;
  flex-direction: row;
  margin: 10px 0;
}
.lizi1 {
  width: 5%;
}
.lizi2 {
  width: 92%;
}
.e{
  display: flex;
  justify-content: center;
}
</style>
