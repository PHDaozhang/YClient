<template>
    <div>
        <el-carousel :interval="2000" arrow="always">
          <el-carousel-item v-for="item in items" :key="item">
            <el-image style="height:320" :src="require('@/assets/poker/poker'+item+'.png')"></el-image>
          </el-carousel-item>
        </el-carousel>
        <h6>警告：如果您未满18周岁，或未满足当前法律规定的，没有许可不能进入此游戏</h6>
    </div>
</template>

<script>
export default {
      name:"wFooter",
      data() {
          var items = [];
          for(var i = 0; i < 14; i++)
          {
              items.push(i);
          }
          return {
              items:items,
          };
      }
}
</script>

<style scoped>
    .el-carousel-item h3 {
        color:#475669;
        font-size:18px;
        opacity:0.75;
        line-height:300px;
        margin: 0px;
    }
    .el-carousel-item {
        height:400px
     }
</style>