<template>
    <div>
        <el-button type="primary" >我是电影呢</el-button>

        <el-row>
            <el-col :span="12" v-for="item in dataList" :key="item.Id">
                <router-link :to="getRouterLink(item)">
                    <el-link @click="clickHandler(item.Id)">
                        <el-card shadow="hover" >
                            <img :src="GetAssetImg(item.Address)" />
                            <div>
                                <h5>{{item.Title}}</h5>
                            </div>
                        </el-card>
                    </el-link>
                 </router-link>
            </el-col>
        </el-row>

        <pagination v-show="true" :total="total" @pagination="getList"></Pagination>
    </div>
</template>

<script>
import Pagination from "@/components/Pagination";
import { getItemList } from '@/api/item/item'

export default {
    name:"MovieIndex",
    components:{Pagination},
    data() { 
        return {
            dataList:[],        //显示当前的图片的数量
            total:0,
            listloading:false,          //数据是否正在加载中
            listQuery:{
                Page:1,
                PageSize:this.$store.getters.pageSize
            }
        }
    },
    created() {
        this.getList();
    }, 
    watch:{
        '$route'(to,from) {
            
        }
    },
    methods:{
        getList() {
            //1或是2
            console.log( this.$route );

            var queryType = 1;
            var routerName = this.$route.name;
            if( routerName == "videoIndex" )
            {
                queryType = 1;
            }
            else if( routerName == "movieIndex" )
            {
                queryType = 2;
            }

            getItemList(queryType,this.$route.params.id,this.listQuery)
            .then(response=>{
                this.dataList = response.data.Data.list;
                this.total = response.data.Data.count;

                console.log("this.dataList:");
                console.log(response.data);
            })
            .catch(err=>{
                console.log("请求数据失败 movie");
            });
            console.log("go getList");
        },
        clickHandler() {

        },
        getRouterLink(item) {   
            var path = "/movieDetial/" + item.Id;
            return {path:path};
        }
    }
}
</script>


<style scoped>

</style>