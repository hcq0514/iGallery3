import http from '../public/public'

let apiUrl = 'http://localhost:6001/api/base/'
let followApiUrl = apiUrl + "follow/";

//关注功能

export const addFollow = (userId, targetUserId) => {
    return http.requestPost(followApiUrl + "addFollow?userId=" + userId + "&targetUserId=" + targetUserId)
};
//是否存在关注关系
export const existFollow = (userId, targetUserId) => {
    return http.requestQuickGet(followApiUrl + "existFollowByUserIdAndTargetUserId?userId=" + userId + "&targetUserId=" + targetUserId)
};


