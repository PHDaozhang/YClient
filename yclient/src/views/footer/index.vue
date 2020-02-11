<template>
    <div>
        <el-carousel :interval="2000" arrow="always">
          <el-carousel-item v-for="item in cards" :key="item.Id">
              <div v-if="item.Address">
                  <img :src="imgUrl(item.Address)" />
              </div>
          </el-carousel-item>
        </el-carousel>
        <h6>警告：如果您未满18周岁，或未满足当前法律规定的，没有许可不能进入此游戏</h6>
    </div>
</template>

<script>
    import {getAdList} from "@/api/ad/ad"

export default {
      name:"wFooter",
      data() {
          return {
              cards:[]
          };
      },
      created() {
             this.getUPCardsAdList();
      },
      methods:{
           getUPCardsAdList() {
              getAdList(3,{offset:0,count:4})
              .then(response => {
                  this.cards = response.data.Data;
              })
              .catch(err=>{

              })
          },
          imgUrl(url) {
              return require(  "@/assets/" + url  ); 
          }
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
    .div {
        bottom: 0px;
    }
</style>