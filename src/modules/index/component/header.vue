<template>
  <a-row class="row flex-center">
    <a-col class="white flex-center title" :span="2"><span>彗星小说网</span></a-col>
    <a-col class="nav-center" :span="20">
      <a-col class="nav-left white" :span="6">玄幻 玄幻 玄幻 玄幻</a-col>
      <a-col :span="12" class="flex-center white">
        图标<input type="text" value="hello world" />
      </a-col>
      <a-col class="nav-right white" :span="6">登陆 注册</a-col>
    </a-col>
    <a-col class="white" :span="2"></a-col>
    <!-- <a-col class="nav-center" :span="2">hello world</a-col> -->
  </a-row>
</template>

<style scoped>
.title {
  font-size: 15px;
}
.row {
  display: flex;
  background-color: rgba(0, 0, 0, 0.65);
}
.nav-center {
  /* github color */
  background-color: rgba(0, 0, 0, 0.65);

  /* cetner */
  display: flex;
  justify-content: center;

  /* margin */
  padding: 12px;
}

.flex-center {
  display: flex;
  justify-content: center;
}

.nav-left {
  display: flex;
  justify-content: flex-start;
}

.nav-right {
  display: flex;
  justify-content: flex-end;
}

.white {
  color: azure;
}
</style>
