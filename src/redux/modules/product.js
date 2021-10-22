import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import instance from "../../shared/Request";


// 액션 타입
const GET_PRODUCT = "GET_PRODUCT"
const BUY_PRODUCT = "BUY_PRODUCT"
// 액션 생성함수
const getProducts = createAction(GET_PRODUCT, detail => ({ detail }))
const buyProducts = createAction(BUY_PRODUCT, buy => ({ buy }))

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


//도서 구매 미들웨어
const buyProductFB = (productId, round) => {
  const payload = { productId, round };

  return function (dispatch, getState, { history }) {
    instance.put(`/buy`, payload)
      .then((res) => {
        dispatch(buyProducts(res.data))
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
      produce(state, draft => { draft.detail = action.payload.detail }),
    [BUY_PRODUCT]: (state, action) =>
      produce(state, draft => { draft.buy = action.payload.buy }),
  }, initialState)



const actionCreators = {
  getProductsFB,
  buyProductFB,
};

export { actionCreators };