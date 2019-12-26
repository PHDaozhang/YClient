<template>
    <div>
         <h2 class="text">{{title}}</h2>
            <el-row>
                <el-col :span="12" v-for="o in dataList" :key="o.id">
                    <el-link @click="clickHandler">
                        <el-card shadow="hover" >
                            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" />
                            <div>
                                <h5>我就是一个测试内容</h5>
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
        }
    }
}
</script>

<style scoped>
.text {
    text-align: left
}
</style>