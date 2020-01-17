<template>
    <div>
        <el-button type="primary" >我是电影呢</el-button>

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
            getItemList(this.listQuery)
            .then(response=>{
                this.list = response.data.Data.list;
                this.total = response.data.Data.count;
            })
            .catch(err=>{
                console.log("请求数据失败 movie");
            });
            console.log("go getList");
        }
    }
}
</script>


<style scoped>

</style>