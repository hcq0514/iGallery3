import http from '../public/public'

let apiUrl = 'http://localhost:6001/api/moment/'


//获取用户动态
export const getMomentsByUserId = (userId) => {
    return http.requestQuickGet(apiUrl + "getMomentsByUserId?userId=" + userId)
};


