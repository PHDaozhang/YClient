<template>
    <div>
        <h5>{{title}}</h5>
        <el-button>我是图片仔细</el-button>
        <div v-for="item in list" :key="item" >
            <img :src="GetAssetImg(item)" />
        </div>
    </div>
</template>


<script>
import {getItem} from "@/api/item/item"

export default {
    //显示几张图片
    name:"PicDetail",
    data() {
        return {
            title:"",
            list:[],
        }
    },  
   
    created() {
        this.title = "this.title";
        console.log(this.$route.params);
        console.log(this.$route.params.id);
        this.getItemData({id:this.$route.params.id});
    }, 
    methods:{
        getItemData(data) {
            getItem(data)
            .then( response =>{
                console.log("response detailData");
                console.log( response.data.Data );
                var  responseData = response.data.Data;
                this.title = responseData.Title;
                //显示几个图片
                this.list = responseData.Address.toString().split(",");   
            } )
            .catch(err=>{
                console.log("detail the has error");
            });
            
        }
    }
}
</script>


<style scoped>

</style>