import instance from "../shared/Request";

// 댓글 추가
function apiPostComment(param) {
}

// 내서재 데이터 
function apiGetMypage() {
  return instance.get(`/mypage`)
}

// 내 로그인 정보 확인
function apiGetMyInfo() {
  return instance.get('/me')
}
export { apiPostComment, apiGetMypage, apiGetMyInfo };
