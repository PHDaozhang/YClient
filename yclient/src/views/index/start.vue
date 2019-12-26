<template>
    <div>
        <el-container >
            <el-header>
                <w-header></w-header>
            </el-header>
            <el-main>
                <div id="content" >
                    <router-view></router-view>
                </div>
            </el-main>
            <el-footer>
                <w-footer></w-footer>
            </el-footer>
        </el-container>
    </div>
</template>


<script>
import wFooter from '@/views/footer';
import wHeader from "@/views/header";


export default {
    name:"wStart",    
    components:{wFooter,wHeader},
}
</script>


<style scoped>
.el-container 
{
    height: 4000px;
}
.el-header
{
    top: 0px;
    height: 15%;
}
.el-footer
{
    bottom: 0%;
}
.el-main 
{
    position: relative;
    top:15%;
    height: 70%;
}
#content {
    position: relative;
    top: 300px;
}
</style>