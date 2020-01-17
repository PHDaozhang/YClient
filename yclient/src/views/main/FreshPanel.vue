<template>
    <div>
         <h2 class="text">{{title}}</h2>
            <el-row>
                <el-col :span="12" v-for="item in dataList" :key="item.Id">
                    <el-link @click="clickHandler(item.Id)">
                        <el-card shadow="hover" >
                            <img :src="GetAssetImg(item.Address)" />
                            <div>
                                <h5>{{item.Title}}</h5>
                            </div>
                        </el-card>
                    </el-link>
                </el-col>
            </el-row>
    </div>    
</template>

<script>
export default {
    name:"WFreshPanel",
    props:{
        title:{
            type:String,
        },
        dataList:{
            type:Array,
        }
    },
    data() {
        return {
            
        };
    },
    methods:{
        clickHandler() { 
            console.log("......");
            console.log(this.dataList[0]);
        }
    }
}
</script>

<style scoped>
.text {
    text-align: left
}
</style>