<template>
    <div>
        <el-carousel :interval="2000" arrow="always">
          <el-carousel-item v-for="item in cards" :key="item">
            <el-image style="height:320" :src="require('@/assets/poker/poker'+item+'.png')"></el-image>
          </el-carousel-item>
        </el-carousel>

        <div>
            <el-row v-for="item in headerList" :key="item.title" >
              <el-col :span="24">
                  <header-item :title="item.title" :data="item.data" ></header-item>
              </el-col>
            </el-row>
        </div>
        <br>
        
        <el-carousel :interval="2000" arrow="always">
          <el-carousel-item v-for="item in cards" :key="item">
            <el-image style="height:320" :src="require('@/assets/poker/poker'+item+'.png')"></el-image>
          </el-carousel-item>
        </el-carousel>
        
    </div>

</template>

<script>
import headerItem from '@/views/header/headerItem'
import configData from '@/data/header.json';

export default {
    name:"wHeader",
    components:{headerItem},
     data() {
          return {
              cards:[0,1,2,3,4,5,6,7,8,9,10,11,12,13],
              headerList:configData.header,
          }
      },
      created() {
          console.log( configData.header );
      }

}
</script>

<style scoped>

</style>