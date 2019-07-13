<template>
  <div class="header">
    <a-row class="nav-header">
      <a-col class="header-left" :span="2">彗星小说网</a-col>
      <a-col calss="header-center" :span="12"><input type="text" class="header-input"></a-col>
      <a-col class="header-right" :span="2" :offset="8">登陆 注册</a-col>
    </a-row>
  </div>
</template>

<style scope>
.header-left {
    display: flex;
    height: 32px;
    text-align: center;
    align-items: center;
}
.header-right {
    display: flex;
    height: 32px;
    text-align: center;
    align-items: center;
}
.header {
    background-color: red;
    height: 64px;
}

.nav-header {
    padding: 16px;
    height: 32px;
}

.header-input {
    height: 32px;
}
</style>