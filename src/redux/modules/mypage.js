import { apiGetMypage, apiGetMyInfo } from "../../api/mypageApi";
import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import Mypage from "../../pages/Mypage";
import instance from "../../shared/Request";

// 액션 생성
const GET_MYPAGE = 'GET_MYPAGE'
const GET_MYINFO = 'GET_MYINFO'
// 액션 생성 함수
const getMypage = createAction(GET_MYPAGE, myinfo => ({ myinfo }))
const getMyinfo = createAction(GET_MYINFO, info => ({ info }))
// 초기화
const initialState = {
  myinfo: [],
  info: []
}
// 내도서 가지고 오는 미들웨어
const getMypageFB = () => {
  console.log(123123);
  return async function (dispatch, getState, { history }) {
    await instance.get('/mypage')
      .then((res) => {
        console.log(res.data);
        dispatch(getMypage(res.data))
      })
      .catch((error) => {
        console.log(error.response.data.msg);
      })
  }
}

// 내정보 가지고 오는 미들웨어
const getMyinfoFB = () => {
  console.log(456456456);
  return async function (dispatch, getState, { history }) {
    await instance.get('/me')
      .then((res) => {
        console.log(res.data);
        dispatch(getMyinfo(res.data))
      })
      .catch((error) => {
        console.log(error.response.data.msg);
      })
  }
}

// 리듀서
export default handleActions(
  {
    [GET_MYPAGE]: (state, action) =>
      produce(state, draft => { draft.myinfo = action.payload.myinfo }),
    [GET_MYINFO]: (state, action) =>
      produce(state, draft => { draft.info = action.payload.info })
  }, initialState)

const actionCreators = {
  getMypageFB,
  getMyinfoFB
};

export { actionCreators };

