import { apiGetMypage, apiGetMyInfo } from "../../api/mypageApi";
import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import Mypage from "../../pages/Mypage";

// 액션 생성
const GET_MYPAGE = 'GET_MYPAGE'
const GET_MYINFO = 'GET_MYINFO'
// 액션 생성 함수
const getMypage = createAction(GET_MYPAGE, myinfo => ({ myinfo }))
const getMyinfo = createAction(GET_MYINFO, info => ({ info }))
// 초기화
const initialState = {
  mypage: [],
  info: []
}
// 내도서 가지고 오는 미들웨어
const getMypageFB = () => {
  return async function (dispatch, getState, { history }) {
    const my_list = await apiGetMypage();
    console.log(my_list)
    dispatch(getMypage(my_list.data))
  }
}

// 내정보 가지고 오는 미들웨어
const getMyinfoFB = (param) => {
  return async function (dispatch, getState, { history }) {
    const my_info = await apiGetMyInfo(param);
    console.log(my_info)
    dispatch(getMyinfo(my_info.data))
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

