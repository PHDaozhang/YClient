import request from "@/utils/request"


export function getItemList(tp,childTp,data)
{
    return request({
        url:"/item/" + tp + "/" + childTp,
        method:"get",
        params:data
    });
}

export function getItem(data)
{
    return request({
        url:"/item",
        method:"get",
        params:data
    });
}