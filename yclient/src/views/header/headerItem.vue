<template>
    <div>
        <el-row>
          <el-col :span="4" >
            <h5>{{title}} <el-divider direction="vertical" ></el-divider> </h5>
            
          </el-col>
          <el-col :span="20" class="link">
              <el-row  >
                <el-col  :span="6" v-for="item in data" :key="item.name">
                  <el-link>{{item.name}}</el-link>
                </el-col>
                <el-divider></el-divider>
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
.link {
  border-style: solid;
  border-color: brown;
}

</style>