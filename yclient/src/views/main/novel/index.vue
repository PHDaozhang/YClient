<template>
    <div>
        <el-button type="primary" >我是小说呢</el-button>
    </div>
</template>


<script>
export default {
    name:"NovelIndex",
    created() {
        console.log(this.$route.params);
        console.log(this.$route.query);
    }
}
</script>


<style scoped>

</style>