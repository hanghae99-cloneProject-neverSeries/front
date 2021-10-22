import { useState, useRef } from "react";
import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as actionComments } from "../redux/modules/comment";
import { Text, Grid, Image, Input, Button } from "../elements/index";
import { history } from "../redux/configStore";

const Comment = () => {
    const dispatch = useDispatch();

    const isLogin = useSelector((store) => store.user.is_login);
    const novel_detail = useSelector((state) => state.product.detail);

    const reviews = novel_detail?.reviews;
    const productId = novel_detail?.product?.id;

    const [review, setReview] = useState("");

    // 댓글 등록
    const addComment = (productId, review) => {
        console.log("aaaaaaaaaaaaaaaaaaaaaa", productId);
        dispatch(actionComments.addCommentFB(productId, review));
    };

    const commentInputToggle = (isLogin) => {
        return isLogin ? (
            <Grid ai={"start"} fd={"column"} width={"780px"}>
                <Grid margin="40px 0px 5px 0px">
                    <Text fontSize={"18px"} bold={"500"}>
                        댓글 {reviews?.length}
                    </Text>
                </Grid>

                <Grid width={"780px"} margin={"0px 0px 10px 0px"}>
                    <Textarea
                        placeholder="스포성 댓글이나 악플은 삭제될 수 있습니다."
                        rows="5"
                        cols="90"
                        value={review}
                        onChange={(e) => {
                            setReview(e.target.value);
                        }}
                    />
                </Grid>
                <Button
                    width={"90px"}
                    height={"30px"}
                    bgColor={"#03c75a"}
                    others={"border-radius:5px"}
                    _onClick={() => addComment(productId, review)}
                >
                    등록
                </Button>
            </Grid>
        ) : (
            <NOtLoginWrap>
                <p>댓글 {reviews?.length}</p>
                <NotLogin>
                    <NotLoginInput
                        placeholder="댓글을 작성하려면 로그인 해주세요"
                        onClick={() => {
                            alert(
                                "네이버 로그인 하신 후 이용해 주시기 바랍니다."
                            );
                            history.replace("/login");
                        }}
                    />
                </NotLogin>
            </NOtLoginWrap>
        );
    };
    return (
        <div>
            {commentInputToggle(isLogin)}
            <div>
                {reviews?.map((data, index) => (
                    <div key={index}>
                        <Grid width={"780px"} bg={"red"}>
                            <Grid>
                                <Text>{data.nickname}</Text>
                            </Grid>
                            <Grid>
                                <Text>{data.review}</Text>
                            </Grid>
                        </Grid>
                    </div>
                ))}
            </div>
        </div>
    );
};

const Textarea = styled.textarea`
    border: 1px solid lightgray;
    border-radius: 5px;
    height: 100px;
    width: 780px;
    padding: 16px;
`;

const NOtLoginWrap = styled.div`
    margin-top: 80px;
    width: 782px;
    height: 150px;
`;
const NotLogin = styled.div`
    width: 782px;
    height: 27px;
    padding: 11px 0 45px 0;
    border: 1px solid #dfdfdf;
`;
const NotLoginInput = styled.input`
    width: 752px;
    height: 27px;
    border: none;
    margin-left: 10px;
    font-size: 12px;
    font-weight: bold;
    color: #a1a1a1;
`;
export default Comment;
