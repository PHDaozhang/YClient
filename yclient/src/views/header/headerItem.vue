<template>
    <div>
        <el-row>
          <el-col :span="4">{{title}} |</el-col>
          <el-col :span="20">
              <el-row>
                <el-col :span="6" >{{data[0].name}}</el-col>
                <el-col :span="6" >{{data[1].name}}</el-col>
                <el-col :span="6" >{{data[2].name}}</el-col>
                <el-col :span="6" >{{data[3].name}}</el-col>
              </el-row>
              <el-row>
                <el-col :span="6" >{{data[4].name}}</el-col>
                <el-col :span="6" >{{data[5].name}}</el-col>
                <el-col :span="6" >{{data[6].name}}</el-col>
                <el-col :span="6" >{{data[7].name}}</el-col>
              </el-row>
          </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name:"headerItem",
    props:{
        title:String,
        data:Array
    },
    created() {

    }
}
</script>

<style scoped>
/* .el-table {
    top: 0px;
    left: 100px;
    margin: 20px;
} */

</style>