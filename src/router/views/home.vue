<!--
 * @Author: 王伟斌
 * @Date: 2020-12-10 16:35:44
 * @LastEditors: 王伟斌
 * @LastEditTime: 2020-12-15 09:56:50
 * @FilePath: \weibin\src\router\views\home.vue
-->
<template>
  <div class="hello">
    <van-form @submit="onSubmit">
      <van-field
        v-model="form.userName"
        name="userName"
        label="姓名："
        :required="true"
        placeholder="姓名"
        :rules="[{ required: true, message: '请填写姓名' }]"
      />
      <van-field
        readonly
        clickable
        name="gender"
        :value="form.gender"
        label="性别："
        :required="true"
        placeholder="性别"
        @click="showPicker = true"
      />
      <van-popup v-model="showPicker" position="bottom">
        <van-picker
          show-toolbar
          :columns="columns"
          @confirm="onConfirm"
          @cancel="showPicker = false"
        />
      </van-popup>
      <van-field
        v-model="form.age"
        name="age"
        label="年龄："
        placeholder="年龄"
        :rules="[{ validator, message: '请输入正确年龄' }]"
      />
      <van-field
        v-model="form.organization"
        name="organization"
        label="工作单位："
        :required="true"
        placeholder="工作单位"
        :rules="[{ required: true, message: '请填写工作单位' }]"
      />
      <van-field
        v-model="form.department"
        name="department"
        label="工作部门："
        :required="true"
        placeholder="工作部门"
        :rules="[{ required: true, message: '请填写工作部门' }]"
      />
      <van-field
        v-model="form.position"
        name="position"
        label="职务："
        :required="true"
        placeholder="职务"
        :rules="[{ required: true, message: '请填写职务' }]"
      />
      <van-field
        v-model="form.workTitle"
        name="workTitle"
        label="职称："
        placeholder="职称"
      />
      <van-field
        v-model="form.contactNumber"
        name="contactNumber"
        label="联系电话："
        placeholder="联系电话"
        :required="true"
        :rules="[{ pattern, message: '请输入正确的联系电话' }]"
      />
      <van-field
        v-model="form.education"
        name="education"
        label="学历："
        placeholder="学历"
      />
      <van-field
        v-model="form.workDirection"
        name="workDirection"
        label="工作或研究方向："
        placeholder="工作或研究方向"
      />
      <van-field
        v-model="form.otherAssociationPosition"
        name="otherAssociationPosition"
        label="目前担任的其他协会职务(一项)："
        placeholder="目前担任的其他协会职务"
      />
      <van-field
        readonly
        clickable
        name="intentionPosition"
        :value="form.intentionPosition"
        label="愿意在专委会承担的工作："
        placeholder="愿意在专委会承担的工作"
        @click="showPicker2 = true"
      />
      <van-popup v-model="showPicker2" position="bottom">
        <van-picker
          show-toolbar
          :columns="columns2"
          @confirm="onConfirm2"
          @cancel="showPicker2 = false"
        />
      </van-popup>
      <van-field
        v-if="isShow"
        v-model="intentionPosition"
        name="other"
        label="其他工作："
        placeholder="愿意在专委会承担的工作"
      />
      <van-field 
         name="attendMeeting" 
         label="是否参会：" 
         :required="true"
         :rules="[{ required: true, message: '请选择其中一项' }]">
        <template #input>
          <van-radio-group v-model="form.attendMeeting" direction="horizontal">
            <van-radio name="是" shape="square">是</van-radio>
            <van-radio name="否" shape="square">否</van-radio>
          </van-radio-group>
        </template>
      </van-field>
       <van-field 
         name="needLunch" 
         label="是否就餐："
         :required="true"
         :rules="[{ required: true, message: '请选择其中一项' }]"
         >
        <template #input>
          <van-radio-group v-model="form.needLunch" direction="horizontal">
            <van-radio name="是" shape="square">是</van-radio>
            <van-radio name="否" shape="square">否</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pattern:/^[0-9]*$/,
      form: {
        age: "",
        contactNumber: "",
        department: "",
        education: "",
        gender: "",
        intentionPosition: "",
        organization: "",
        otherAssociationPosition: "",
        position: "",
        userName: "",
        workDirection: "",
        workTitle: "",
        other: "",
        attendMeeting: '',
        needLunch: ''
      },
      intentionPosition: "",
      isShow: false,
      columns: ["男", "女"],
      columns2: [
        "组织协调",
        "承办会议或者活动",
        "学术研究",
        "授课",
        "请在下方输入框输入"
      ],
      showPicker: false,
      showPicker2: false
    };
  },
  methods: {
    validator(val) {
      return val <= 100;
    },
    onSubmit(values) {
      if (this.intentionPosition) {
        values.intentionPosition = this.intentionPosition;
      }
      this.$axios({
        method: "post",
        url: "/api/applicationForm/created",
        data: { ...values }
      }).then(res => {
        if (res.data.retcode === "000000") {
          this.$router.push("/success");
          this.form = {};
          this.intentionPosition = "";
        } else {
          this.$Toast.fail("提交失败");
        }
      });
    },
    onConfirm(value) {
      this.form.gender = value;
      this.showPicker = false;
    },
    onConfirm2(value) {
      this.form.intentionPosition = value;
      this.showPicker2 = false;
      console.log(value);
      if (value === "请在下方输入框输入") {
        this.isShow = true;
        this.form.intentionPosition = "";
      } else {
        this.isShow = false;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.van-cell{
  font-size: 18px;
}
.basic {
  font-weight: bold;
  margin: 16px;
  font-size: 14px;
}
</style>
