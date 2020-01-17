import request from "@/utils/request"


export function getItemList(tp,childTp,data)
{
    return request({
        url:"/item/" + tp + "/" + childTp,
        method:"get",
        data
    });
}