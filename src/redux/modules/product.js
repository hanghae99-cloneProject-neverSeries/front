import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { getProductApi } from "../../api/detailApi";
import instance from "../../shared/Request";


// 액션 타입
const GET_PRODUCT = "GET_PRODUCT"
// 액션 생성함수
const getProducts = createAction(GET_PRODUCT,detail=>({detail}))

// 초기화 
const initialState = {
    product : "아무거나"
  }
  
// 도서 상세 정보 미들웨어
const  getProductsFB= params => {
    return async function (dispatch, getState, { history }) {
      const products_list = await getProductApi(params);
      console.log(products_list);
      products_list.then((res)=>{dispatch(getProducts(products_list.data.product))}
      )
    }
  }


// const  getProductsFB= params => {
//     return  function (dispatch, getState, { history }) {
// instance.get("/novel/2")
// .then((res) =>{
//     console.log("ehla",res.data.product);
// })
// .catch((error)=> {
//     console.log(error);
// });   }
//   }


// 리듀서
export default handleActions(
    {
      [GET_PRODUCT]: (state, action) =>
      produce(state, draft => {draft.detail = action.payload.detail})
        },initialState)


  
  export { getProductsFB }
  
