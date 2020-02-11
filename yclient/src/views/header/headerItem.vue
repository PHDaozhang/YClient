<template>
    <div>
        <el-row>
          <el-col :span="4" >
            <h5>{{title}} <el-divider direction="vertical" ></el-divider> </h5>
            
          </el-col>
          <el-col :span="20" class="link">
              <el-row  >
                <el-col  :span="6" v-for="item in data" :key="item.name">
                  <!---->
                  <router-link :to="getRouterLink(item)">
                    <el-link>{{item.name}}</el-link>
                  </router-link>
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
        type:Number,
        name:String,
        data:Array
    },
    created() {
        
    },
    methods:{
      getRouterLink(item) {
        var path;
        path = "/" + this.name + "/" + item.childType;
        return {path:path};
      }
    }
}
</script> 

<style scoped>
.link {
  border-style: solid;
  border-color: brown;
}

</style>