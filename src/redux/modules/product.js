import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import instance from "../../shared/Request";


// 액션 타입
const GET_PRODUCT = "GET_PRODUCT"
// 액션 생성함수
const getProducts = createAction(GET_PRODUCT, detail => ({ detail }))

// 초기화 
const initialState = {
  product: "아무거나"
}

// 도서 상세 정보 미들웨어
const getProductsFB = params => {
  console.log('params', params);
  return function (dispatch, getState, { history }) {
    instance.get(`/novel/${params}`)
      .then((res) => {
        console.log('asdfadsfadsfadsfadsfadsfasdf', res.data)
        dispatch(getProducts(res.data))
      })
      .catch((err) => {
        console.log(err.response)
      })
  }
}



// 리듀서
export default handleActions(
  {
    [GET_PRODUCT]: (state, action) =>
      produce(state, draft => { draft.detail = action.payload.detail })
  }, initialState)



const actionCreators = {
  getProductsFB,
};

export { actionCreators };