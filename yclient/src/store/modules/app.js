import Cookies from 'js-cookie'

const app = {
    state:{
        pageSize:Number(Cookies.get('pageSize')) || 20
    },
    mutations:{ 
        SET_PAGESIZE:( state,size)=>{
            state.pageSize = size;
            Cookies.set('pagesize',size);
        }
    },
    actions:{
        setPageSize({commit},size){
            commit("SET_PAGESIZE",size);
        }
    }
}


export default app;