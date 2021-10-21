import instance from "../shared/Request";

// 댓글 추가
function apiPostComment(param) {
    return instance.post('/reviews/2',param)
}
export {apiPostComment};