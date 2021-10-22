import { useState, useRef } from 'react'
import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as actionComments } from '../redux/modules/comment';

const Comment = (props) => {
  const dispatch = useDispatch();

  const isLogin = useSelector((store) => store.user.is_login);
  const novel_detail = useSelector((state) => state.product.detail);

  const reviews = novel_detail?.reviews;

  const [review, setReview] = useState("");



  // 댓글 등록 
  const addComment = () => {
    const productId = props?.match?.params?.productId

    dispatch(
      actionComments.addCommentFB(productId, review)
    )
  }

  return (
    isLogin ? (
      <div>
        <P>댓글 {reviews?.length}</P>
        <Wrap>
          <div>
            <Input placeholder="스포성 댓글이나 악플은 삭제될 수 있습니다."
              rows="5" cols="90" value={review} onChange={(e) => { setReview(e.target.value) }} />
          </div>
          <Upload >
            <button onClick={addComment}>등록</button>
          </Upload>
        </Wrap>
      </div>
    ) : (
      <NOtLoginWrap>
        <p>댓글 {reviews?.length}</p>
        <NotLogin >
          <NotLoginInput placeholder="댓글을 작성하려면 로그인 해주세요" onClick={() => { alert("네이버 로그인 하신 후 이용해 주시기 바랍니다.") }} />
        </NotLogin>
      </NOtLoginWrap>
    )
  )
}

const Wrap = styled.div`
width : 782px;
height : 178px;
border : 1px solid #dfdfdf;
border-radius : 2px;
`
const Input = styled.textarea`
border : none;
margin : 30px;
`
const Upload = styled.div`
width : 782px;
height: 43px;
border-top : 1px solid  #dfdfdf;
margin : 0;
`
const P = styled.p`
margin :34px 0 10px 0;
`
const NOtLoginWrap = styled.div`
margin-top : 80px;
width : 782px;
height : 150px;
`
const NotLogin = styled.div`
width : 782px;
height : 27px;
padding : 11px 0 45px 0;
border : 1px solid #dfdfdf;
`
const NotLoginInput = styled.input`
width : 752px;
height: 27px;
border : none;
margin-left : 10px;
font-size : 12px;
font-weight : bold;
color: #a1a1a1;
`
export default Comment;