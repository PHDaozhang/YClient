<template>
    <div>
        <w-fresh-panel
        :title="title1"
        :dataList="videoList"
        ></w-fresh-panel>
        
        <w-fresh-panel
        :title="title2"
        :dataList="movieList"
        ></w-fresh-panel>
    </div>
</template>

<script>
import WFreshPanel from '@/views/main/FreshPanel.vue'
import {getItemList} from "@/api/item/item"

export default {
    name:"wMainIndex",
    components:{WFreshPanel},
    data() {
        
        return {
           title1:"最新视频",
           title2:"最新电影",
           movieList:[],
           videoList:[],
        }
    },
    created() {
        this.getItemList();
    },
    methods:
    {
        clickHandler() {
            console.log("el-card");
        },
        //1:视频，2：电影 3：图片 4：小说 5游戏
        getItemList() {
            //最新的视频
            getItemList(1,0,{PageSize:10,Page:0})
            .then(response=>{
                this.videoList = response.data.Data.list;
            })
            .catch(err=>{
                console.log("请求最新视频出错");
            });

            //最新的电影
            getItemList(2,0,{PageSize:10,Page:0})
            .then(response=>{
                this.movieList = response.data.Data.list;
            })
            .catch(err=>{

            });
        }
       
    }
}
</script>


<style scoped>
.text {
    text-align: left
}
</style>