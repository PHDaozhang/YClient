<template>
    <div>
        <el-carousel :interval="2000" arrow="always">
          <el-carousel-item v-for="item in upCards" :key="item.Id">
            <img :src="imgUrl(item.Address)" />
          </el-carousel-item>
        </el-carousel>

        <div>
            <el-row v-for="item in headerList" :key="item.title" >
              <el-col :span="24">
                  <header-item :title="item.title" :data="item.data" :name="item.name" :type="item.type" ></header-item>
              </el-col>
            </el-row>
        </div>
        <br>
       
        <el-carousel :interval="2000" arrow="always">
          <el-carousel-item v-for="item in downCards" :key="item.Id">
            <img :src="imgUrl(item.Address)" />
          </el-carousel-item>
        </el-carousel>
        
    </div>

</template>

<script>
import headerItem from '@/views/header/headerItem'
import configData from '@/data/header.json';
import {getAdList} from "@/api/ad/ad"

export default {
    name:"wHeader",
    components:{headerItem},
     data() {
          return {
              upCards:[],
              downCards:[],
              cards:[],
              headerList:configData.header,
          }
      },
      created() {
          console.log( configData.header );
          this.getUPCardsAdList();
          this.getDownCardsAdList();
      },
      methods:{
          getUPCardsAdList() {
              getAdList(1,{offset:0,count:4})
              .then(response => {
                  this.upCards = response.data.Data;
              })
              .catch(err=>{

              })
          },
          getDownCardsAdList() {
              getAdList(2,{offset:0,count:4})
              .then(response => {
                  this.downCards = response.data.Data;
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

</style>