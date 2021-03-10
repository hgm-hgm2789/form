<template>
  <div id="Header">
    <header class="header">
      <span>杭州方大丝绸有限公司</span>
      <span class="Application">应聘登记表</span>
    </header>
  </div>
</template>
<script>
export default {
  name: "Header",
};
</script>
<style scoped>
.header {
  width: 100%;
  background-color: rgb(108, 150, 188);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  font-size: 14px;
}
.Application{
  font-size: 12px;
}
</style>
