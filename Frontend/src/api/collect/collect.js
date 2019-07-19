import http from '../public/public'

let apiUrl = 'http://localhost:6001/api/collect/'

//获取用户收藏夹
export const getUserCollectionsByUserId = (userId) => {
    return http.requestQuickGet(apiUrl + "getUserCollectionsByUserId?userId=" + userId)
};

//删除收藏夹
export const deleteCollectionByCollectionId = (collectionId) => {
    return http.requestQuickGet(apiUrl + "deleteCollectionByCollectionId?collectionId=" + collectionId)
};

//获取收藏夹内动态
export const getCollectionMoment = (collectionId) => {
    return http.requestQuickGet(apiUrl + "getCollectionMoment?collectionId=" + collectionId)
};

//重命名收藏夹
export const renameCollection = (collectionId, newName) => {
    return http.requestQuickGet(apiUrl + "renameCollection?collectionId=" + collectionId + "&newName=" + newName)
};

//重命名收藏夹
export const addCollection = (collectionId, newName) => {
    return http.requestQuickGet(apiUrl + "addCollection?collectionId=" + collectionId + "&newName=" + newName)
};



