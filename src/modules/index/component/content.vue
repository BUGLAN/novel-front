<template>
  <div class="index">
    <a-row>
      <a-col class="index-content" :span="4"></a-col>
      <a-col class="index-content" :span="16">
        <a-col :span="8">
          <a-card hoverable style="width: 240px">
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              slot="cover"
            />
            <a-card-meta title="Europe Street beat">
              <template slot="description">www.instagram.com</template>
            </a-card-meta>
          </a-card>
        </a-col>
        <a-col :span="8">
          <a-card hoverable style="width: 240px">
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              slot="cover"
            />
            <a-card-meta title="Europe Street beat">
              <template slot="description">www.instagram.com</template>
            </a-card-meta>
          </a-card>
        </a-col>
        <a-col :span="8">
          <a-card hoverable style="width: 240px">
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              slot="cover"
            />
            <a-card-meta title="Europe Street beat">
              <template slot="description">www.instagram.com</template>
            </a-card-meta>
          </a-card>
        </a-col>
      </a-col>
      <a-col class="index-content" :span="4"></a-col>
    </a-row>
  </div>
</template>

<script>
console.log("hell");
export default {};
</script>

<style scoped>
.index-content {
  display: flex;
  justify-content: center;
}
</style>
