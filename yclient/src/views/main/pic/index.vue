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
        console.log(this.$route.path);
        console.log(this.$route.params);
        console.log(this.$route.query);
        console.log(this.$route);
    }
}  
</script>

<style scoped>

</style>