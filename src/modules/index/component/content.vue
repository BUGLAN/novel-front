<template>
  <div class="index">
    <a-row>
      <a-col class="index-content" :span="24">
        <a-col :span="4"
          ><img
            src="https://bookcover.yuewen.com/qdbimg/349573/1016709872/150"
            alt=""
        /></a-col>
        <a-col class="index-book-content" :span="20">
          <h3>我家妹子是玉帝</h3>

          <p class="col-p">9月前更新: 正文卷 第五百零四章 总局</p>
        </a-col>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "header"
    };
  },
  mou: function() {
    this.chatper();
  },
  methods: {
    chatper: function() {
      console.log("hello world");
    }
  }
};
</script>

<style scoped>
.index-content {
  display: flex;
  justify-content: center;
}

img {
  width: 50px;
  margin: 7px;
}

h3 {
  margin: 5px 5px;
}

.col-p {
  margin: 5px 5px;
}
</style>
