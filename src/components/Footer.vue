<template>
  <div id="Footer">
    <div class="footer" style="margin: 16px">
      <van-button class="color" round block type="info" native-type="submit"
        >提交</van-button
      >
    </div>
  </div>
</template>
<script>
export default {
  name: "Footer",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
    },
  },
};
</script>
<style scoped>
.footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
}
.color {
  background-color: rgb(108, 150, 188);
  border-radius: 4% 4% 4% 4%;
}
</style>    