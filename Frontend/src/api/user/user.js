import http from '../public/public'

let apiUrl = 'http://localhost:6001/api/user/'


//获取用户
export const getUserById = (userId) => {
    return http.requestQuickGet(apiUrl + userId)
};

//获取关注用户
export const getFollowListByUserId = (userId) => {
    return http.requestQuickGet(apiUrl + "getFollowListByUserId?userId=" + userId)
};

//获取关注用户
export const getFansListByUserId = (userId) => {
    return http.requestQuickGet(apiUrl + "getFansListByUserId?userId=" + userId)
};


