import instance from "../shared/Request"

// 도서 상세 리스트 가지고 오기
function getProductApi(param){
    return instance.get('/novel/2',param)
}
export {getProductApi};