<template>
    <div>
         <el-button type="primary" >我是图片呢</el-button>
    </div>
</template>

<script>
export default {
    name:"picIndex",
    created()
    {
        //需要使用一个 首页，上一页，下一页，尾页 的组件
        console.log(this.$route.path);
        console.log(this.$route.params);
        console.log(this.$route.query);
        console.log(this.$route);
    }
}  
</script>

<style scoped>

</style>