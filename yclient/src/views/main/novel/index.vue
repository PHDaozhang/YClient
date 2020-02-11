<template>
    <div>
        <el-button type="primary" >我是小说呢</el-button>
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
import {getItemList} from '@/api/item/item'

export default {
    name:"NovelIndex",
    components:{Pagination},
    data() {
        return {
            total:0,
            list:[],
            listQuery:{
                Page:1,
                PageSize:this.$store.getters.pageSize
            }
        }
    },
    created() {
        console.log(this.$route.params);
        console.log(this.$route.query);
        this.getList();
    },
    methods:{
        getList() {
            getItemList(4,this.$route.params.id,this.listQuery)
            .then(response=>{
                var responseData =  response.data.Data;
                this.list = responseData.list;
                this.total = responseData.count;
            })
            .catch(err=>{

            })
        },
        getRouterLink(item) {   
            var path = "/novelDetial/" + item.Id;
            return {path:path};
        }
    }
}
</script>


<style scoped>

</style>