<template>
  <a-row class="row flex-center">
    彗星网
    <a-col class="nav-center" :span="20">
      <a-col class="nav-left white" :span="6">玄幻 玄幻 玄幻 玄幻</a-col>
      <a-col :span="12" class="flex-center">
        搜索书籍
        <input type="text" value="hello world" />
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

.vertial-center {
  position: flex;
  top: 50%;
  left: 50%;
  width: 50%;
  height: 50%;
}
</style>
