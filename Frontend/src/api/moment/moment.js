import http from '../public/public'

let momentApiUrl = 'http://localhost:6001/api/moment/'


//获取用户动态
export const getMomentsByUserId = (userId) => {
    return http.requestQuickGet(momentApiUrl + "getMomentsByUserId?userId=" + userId)
};
//获取用户关注人动态
export const getfollowUserMoments = (userId) => {
    return http.requestQuickGet(momentApiUrl + "followUserMoments?userId=" + userId)
};

//添加动态评论
export const addComment = (userId, momentId, content) => {
    return http.requestPost(momentApiUrl + "addMomentComment?userId=" + userId + "&momentId=" + momentId + "&content=" + content)
};


