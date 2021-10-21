import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { setCookie, getCookie, deleteCookie } from "../../shared/Cookie";
import instance from "../../shared/Request";

const initialState = {
    list: [],
};

// ! action types
const SET_NOVEL = "SET_NOVEL";

// ! action creators
const setNovel = createAction(SET_NOVEL, (novel_list) => ({ novel_list }));

// ! middlewares
const getNovel = () => {
    return function (dispatch, getState, { history }) {
        instance
            .get("/")
            .then((res) => {
                dispatch(setNovel(res.data));
                // console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };
};

// ! reducers
export default handleActions(
    {
        [SET_NOVEL]: (state, action) =>
            produce(state, (draft) => {
                draft["list"] = action.payload.novel_list;
            }),
    },
    initialState
);

const actionCreators = {
    getNovel,
};

export { actionCreators };
