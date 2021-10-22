import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apiPostComment } from "../../api/mypageApi";
import instance from "../../shared/Request";

// 댓글 추가 액션타입
const Post_Comment = "Post_Comment";
// 액션생성 함수
const postComment = createAction(Post_Comment, (comment) => ({ comment }));
// state 초기값 생성
const initialState = {
    commentList: [],
};
// 댓글 추가
const addCommentFB = (productId, review) => {
    const thisTime = new Date();
    const payload = {
        review,
        createdAt: thisTime,
    };
    console.log(productId);
    return async function (dispatch, getState, { history }) {
        await instance
            .post(`/reviews/${productId}`, payload)
            .then((res) => {
                console.log(res);
                dispatch(postComment(res));
                window.location.reload();
            })
            .catch((err) => {
                console.log(err);
            });
    };
};

// 댓글추가 리듀서
export default handleActions(
    {
        [Post_Comment]: (state, action) =>
            produce(state, (draft) => {
                draft.commentList = action.paylaod.comment;
            }),
    },
    initialState
);

const actionCreators = {
    addCommentFB,
};

export { actionCreators };
