<template>
  <div id="Main">
    <!-- 应聘岗位 -->
    <van-cell-group>
      <van-field
        class="filed"
        v-model="value"
        label="应聘岗位"
        placeholder="请输入"
        required
      />
    </van-cell-group>
    <!-- 填表日期 -->
    <van-field
      required
      class="filed border"
      readonly
      clickable
      name="datePicker"
      :value="value1"
      label="填表日期"
      placeholder="请选择"
      input-align="center"
      @click="DateshowPicker = true"
    />
    <van-popup v-model="DateshowPicker" position="bottom">
      <van-datetime-picker
        v-model="completionDate"
        :min-date="minDate"
        :max-date="maxDate"
        type="date"
        @confirm="DateonConfirm"
        @cancel="DateshowPicker = false"
      />
    </van-popup>

    <!-- 姓名 -->
    <van-cell-group>
      <van-field
        class="filed"
        v-model="value2"
        label="姓名"
        placeholder="请输入"
        required
      />
    </van-cell-group>
    <!-- 性别 -->

    <van-field
      required
      class="filed border"
      readonly
      clickable
      name="Genderpicker"
      :value="value3"
      label="性别"
      placeholder="请选择"
      input-align="center"
      @click="GendershowPicker = true"
    />
    <van-popup v-model="GendershowPicker" position="bottom">
      <van-picker
        type="value3"
        show-toolbar
        :columns="Gender"
        @confirm="GenderonConfirm"
        @cancel="GendershowPicker = false"
      />
    </van-popup>
    <!-- 出生日期value4 -->
    <van-field
      required
      class="filed border"
      readonly
      clickable
      name="datePicker"
      :value="value4"
      label="出生日期"
      placeholder="请选择"
      input-align="center"
      @click="BirthdayshowPicker = true"
    />
    <van-popup v-model="BirthdayshowPicker" position="bottom">
      <van-datetime-picker
        v-model="birthDate"
        :min-date="minDate"
        :max-date="maxDate"
        type="date"
        @confirm="BirthdayonConfirm"
        @cancel="BirthdayshowPicker = false"
      />
    </van-popup>
    <!-- 民族 -->
    <van-cell-group>
      <van-field
        class="filed"
        v-model="value5"
        label="民族"
        placeholder="请输入"
        required
      />
    </van-cell-group>
    <!-- 政治面貌 -->
    <van-cell-group>
      <van-field
        class="filed"
        v-model="value6"
        label="政治面貌"
        placeholder="请输入"
        required
      />
    </van-cell-group>
    <!-- 婚否value7 -->

    <van-field
      required
      class="filed border"
      readonly
      clickable
      name="Genderpicker"
      :value="value7"
      label="婚否"
      placeholder="请选择"
      input-align="center"
      @click="MarryshowPicker = true"
    />
    <van-popup v-model="MarryshowPicker" position="bottom">
      <van-picker
        type="value7"
        show-toolbar
        :columns="Marry"
        @confirm="MarryonConfirm"
        @cancel="MarryshowPicker = false"
      />
    </van-popup>
    <!-- 健康状况 -->
    <van-cell-group>
      <van-field
        class="filed"
        v-model="value8"
        label="健康状况"
        placeholder="请输入"
        required
      />
    </van-cell-group>
    <!-- 籍贯(省、市) -->
    <van-cell-group>
      <van-field
        class="filed"
        v-model="value9"
        label="籍贯(省、市)"
        placeholder="请输入"
        required
      />
    </van-cell-group>
    <!-- 联系方式 -->
    <van-cell-group>
      <van-field
        class="filed"
        v-model="value10"
        label="联系方式"
        placeholder="请输入"
        required
      />
    </van-cell-group>
    <!-- 电子邮箱 -->
    <van-cell-group>
      <van-field
        class="filed"
        v-model="value11"
        label="电子邮箱"
        placeholder="请输入"
        required
      />
    </van-cell-group>
    <!-- 学历 -->
    <van-cell-group>
      <van-field
        class="filed"
        v-model="value12"
        label="学历"
        placeholder="请输入"
        required
      />
    </van-cell-group>
    <!-- 现住址 -->
    <van-cell-group>
      <van-field
        class="filed"
        v-model="value13"
        label="现住址"
        placeholder="请输入"
        required
      />
    </van-cell-group>
    <!-- 目前是否在职 -->
    <van-cell-group>
      <van-field
        class="filed"
        v-model="value14"
        label="目前是否在职"
        placeholder="请输入"
        required
      />
    </van-cell-group>
    <!-- 预计到岗时间value15 -->
    <van-field
      required
      class="filed border"
      readonly
      clickable
      name="ArrivaldatePicker"
      :value="value15"
      label="预计到岗时间"
      placeholder="请选择"
      input-align="center"
      @click="ArrivalshowPicker = true"
    />
    <van-popup v-model="ArrivalshowPicker" position="bottom">
      <van-datetime-picker
        v-model="ArrivalDate"
        :min-date="minDate"
        :max-date="maxDate"
        type="date"
        @confirm="ArrivalonConfirm"
        @cancel="ArrivalshowPicker = false"
      />
    </van-popup>

    <!-- 期望薪资 -->
    <van-cell-group>
      <van-field
        class="filed"
        v-model="value16"
        label="期望薪资"
        placeholder="请输入"
        required
      />
    </van-cell-group>
    <!-- 外语水平 -->
    <van-cell-group>
      <van-field
        class="filed"
        v-model="value17"
        label="外语水平"
        placeholder="请输入"
        required
      />
    </van-cell-group>
    <!-- 计算机水平 -->
    <van-cell-group>
      <van-field
        class="filed"
        v-model="value18"
        label="计算机水平"
        placeholder="请输入"
        required
      />
    </van-cell-group>

    <!-- 教育经历(请至少完整填写一行value19) -->
    <van-cell-group>
      <van-field
        style="white-space: nowrap"
        v-model="value19"
        label="教育经历(请至少完整填写一行)"
        required
      />
    </van-cell-group>
    <data-table :tableColumns="tableColumns" :tableData="tableData" />
    <!-- 工作经历(请至少完整填写一行，没有则写`无`value20) -->
    <!-- <van-cell-group>
      <van-field
        class="filed"
        v-model="value19"
        label="工作经历(请至少完整填写一行，没有则写`无`)"
        required
      />
    </van-cell-group> -->
    <van-cell-group>
      <van-field
        style="white-space: nowrap"
        v-model="value20"
        label="工作经历(请至少完整填写一行，没有则写`无`"
        required
      />
    </van-cell-group>
    <data-table :tableColumns="workTableColumns" :tableData="workTableData" />
    <!-- 个人荣誉 -->
    <van-cell-group>
      <van-field
        class="filed"
        v-model="value21"
        label="个人荣誉"
        placeholder="请输入"
      />
    </van-cell-group>
    <!-- 兴趣特长 -->
    <van-cell-group>
      <van-field
        class="filed"
        v-model="value22"
        label="兴趣特长"
        placeholder="请输入"
      />
    </van-cell-group>
    <!-- 自我评价 -->
    <van-cell-group>
      <van-field
        class="filed"
        v-model="value23"
        label="自我评价"
        placeholder="请输入"
        required
      />
    </van-cell-group>
  </div>
</template>
<script>
import dataTable from "./dataTable.vue";
export default {
  components: { dataTable },
  name: "Main",
  data() {
    return {
      // 表格列定义
      tableColumns: [
        {
          prop: "time",
          title: "时间",
        },
        {
          prop: "student",
          title: "毕业院校",
        },
        {
          prop: "professional",
          title: "专业",
        },
        {
          prop: "info",
          title: "详细情况",
        },
      ],
      // 表格数据
      tableData: new Array(3).fill(1).map(() => {
        return {
          time: "",
          student: "",
          professional: "",
          info: "",
        };
      }),
      workTableColumns: [
        {
          prop: "time",
          title: "时间",
        },
        {
          prop: "company",
          title: "公司名称",
        },
        {
          prop: "post",
          title: "职务",
        },
        {
          prop: "duty",
          title: "职责",
        },
      ],
      // 表格数据
      workTableData: new Array(3).fill(1).map(() => {
        return {
          time: "",
          company: "",
          post: "",
          duty: "",
        };
      }),
      value: "",
      value1: "",
      value2: "",
      value3: "",
      value4: "",
      value5: "",
      value6: "",
      value7: "",
      value8: "",
      value9: "",
      value10: "",
      value11: "",
      value12: "",
      value13: "",
      value14: "",
      value15: "",
      value16: "",
      value17: "",
      value18: "",
      value19: "",
      value20: "",
      value21: "",
      value22: "",
      value23: "",
      minDate: new Date(1900, 0, 1),
      maxDate: new Date(2025, 10, 1),
      completionDate: new Date(),
      birthDate: new Date(),
      ArrivalDate: new Date(),
      DateshowPicker: false,
      Gender: ["男", "女"],
      Marry: ["是", "否"],
      GendershowPicker: false,
      BirthdayshowPicker: false,
      MarryshowPicker: false,
      ArrivalshowPicker: false,
    };
  },
  methods: {
    dateFormatter(val) {
      if (!val) return "";
      const date = new Date(val);
      const month = date.getMonth() + 1 + "";
      const str = `${date.getFullYear()}-${
        month.length < 10 ? `0${month}` : month
      }-${date.getDate()}`;
      return str;
    },
    DateonConfirm(value1) {
      this.value1 = this.dateFormatter(value1);
      this.DateshowPicker = false;
    },
    GenderonConfirm(value3) {
      this.value3 = value3;
      this.GendershowPicker = false;
    },
    BirthdayonConfirm(value4) {
      this.value4 = this.dateFormatter(value4);
      this.BirthdayshowPicker = false;
    },
    MarryonConfirm(value7) {
      this.value7 = value7;
      this.MarryshowPicker = false;
    },
    ArrivalonConfirm(value15) {
      this.value15 = this.dateFormatter(value15);
      this.ArrivalshowPicker = false;
    },
  },
};
</script>
<style scoped>
.filed {
  display: flex;
  flex-flow: column;
  white-space: nowrap;
}
/* table {
  width: 100%;
} */
.border /deep/ input {
  border: 1px solid rgb(226, 226, 226);
}
</style>