import instance from "../shared/Request";

// 댓글 추가
function apiPostComment(param) {
    return instance.post('/reviews/2',param)
}

// 내서재 데이터 
function apiGetMypage(param){
    return instance.get('/mypage',param)
}

// 내 로그인 정보 확인
function apiGetMyInfo(){
    return instance.get('/me',)
}
export {apiPostComment,apiGetMypage, apiGetMyInfo};
