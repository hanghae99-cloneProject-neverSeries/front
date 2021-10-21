import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apiPostComment } from "../../api/mypageApi";

// 댓글 추가 액션타입
const Post_Comment = 'Post_Comment';
// 액션생성 함수
const postComment = createAction(Post_Comment,comment=>({comment}))
// state 초기값 생성
const initialState = {
    commentList : []
}
// 댓글 추가
const postCommentFB = params => {
    return async function (dispatch, getState, { history }) {
      const comment_list = await apiPostComment(params)
      console.log('comment_list', comment_list)
      dispatch(postComment(params))
    }
  }
// 댓글추가 리듀서
  export default handleActions(
    {
      [Post_Comment]: (state, action) =>
        produce(state, draft => {
          draft.commentList = action.paylaod.comment
        }),
    },
    initialState
  )
  
  export {postCommentFB}
  
  
  