<template>
    <div>
         <el-button type="primary" >我是图片呢</el-button>
        
        <div v-for="item in list" :key="item.Id">
            <router-link :to="getRouterLink(item)">
                <el-link  >
                    <div>
                        我测试哈子{{item.Id}}
                    </div>
                </el-link>
            </router-link>
            <br>
        </div>
        
        
        
         <pagination v-show="true" :total="total"
         :page.sync="listQuery.Page"
         :limit.sync="listQuery.PageSize"
          @pagination="getList"></Pagination>
    </div>
</template>

<script>
import Pagination from "@/components/Pagination";
import { getItemList } from '@/api/item/item'

export default {
    name:"PicIndex",
    components:{Pagination},
    data() { 
        return {
            total:0,
            listloading:false,          //数据是否正在加载中
            list:[],            //数据列表
            listQuery:{
                Page:1,
                PageSize:this.$store.getters.pageSize
            }
        }
    },
    created() {
        this.getList();
    },
    methods:{
        getList() { 
            console.log(this.listQuery);
            getItemList(3,this.$route.params.id,this.listQuery)
            .then(response=>{
                this.list = response.data.Data.list;
                this.total = response.data.Data.count;

                console.log("list:");
                console.log( this.list );
            })
            .catch(err=>{
                console.log("请求数据失败 movie");
            });
            console.log("go getList");
        },
        getRouterLink(item) {   
            var path = "/picDetial/" + item.Id;
            return {path:path};
        }
    }
}  
</script>

<style scoped>

</style>