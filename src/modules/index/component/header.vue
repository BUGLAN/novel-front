<template>
  <div class="header">
    <a-row class="nav-header">
      <a-col class="header-left" style="color: white;" :span="2">彗星小说网</a-col>
      <a-col calss="header-center" style="color: white;" :span="12">
        <input type="text" class="header-input" />
        玄幻 奇幻 都市 科幻 日常
      </a-col>
      <a-col class="header-right" style="color: white;" :span="2" :offset="8">我的书架</a-col>
    </a-row>
  </div>
</template>

<style scope>
.header-left {
  display: flex;
  height: 32px;
  text-align: center;
  align-items: center;
  justify-content: center;
}
.header-right {
  display: flex;
  height: 32px;
  text-align: center;
  align-items: center;
}
.header {
  background-color: #24282e;
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