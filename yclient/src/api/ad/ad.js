import request from '@/utils/request'


export function getAdList(tp,data)
{
    return request({
        url:"/ad/" + tp,
        mthod:"get",
        data
    });
}