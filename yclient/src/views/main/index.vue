<template>
    <div>
        <w-fresh-panel
        :title="title1"
        :dataList="dataList"
        ></w-fresh-panel>
        
        <w-fresh-panel
        :title="title2"
        :dataList="dataList"
        ></w-fresh-panel>
    </div>
</template>

<script>
import WFreshPanel from '@/views/main/FreshPanel.vue'

export default {
    name:"wMainIndex",
    components:{WFreshPanel},
    data() {
        let dataList = [];
        for(let i = 0; i < 10; i++ )
        {
            dataList.push({id:i,name:"name" + i});
        }
        return {
            title1:"标题1",
            title2:"标题1",
            dataList:dataList,
        }
    },
    methods:
    {
        clickHandler() {
            console.log("el-card");
        }
    }
}
</script>


<style scoped>
.text {
    text-align: left
}
</style>