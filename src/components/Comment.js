import { useState, useRef } from 'react'
import React from "react";
import styled from "styled-components";
import { useSelector,useDispatch } from "react-redux";
import * as commentAtions from "../redux/modules/comment"

const Comment = (props)=>{
    const dispatch = useDispatch();
    const isLogin = useSelector((store) => store.user.is_login); 
    // const productId = props.match.params.productId
    // let product = useSelector(store => store.product.detail)
    // console.log('articleInfo', product)
        
    // // 댓글 등록할 것 긁어오기
    // const commentRef = useRef('');
    // const commentList = [1, 2, 3];
  
    // 댓글 등록 
  // const addComment = () => {
  //   const content = commentRef.current.value
  //   dispatch(
  //     actionComments.addCommentFB({
  //       productId: Number(productId),
  //       content: content,
  //     })
  //   )
  // }
   


    return(
        isLogin?(
            <div>
            <P>댓글 321{}</P>
            <Wrap>
                
                <div>
                <Input placeholder = "스포성 댓글이나 악플은 삭제될 수 있습니다." rows="5" cols="90"  />
                </div>
                <Upload>
                    <button >등록</button>
                </Upload>
            </Wrap>
            </div>



        ) : (
            <NOtLoginWrap>
            <p>댓글 321{}</p>
            <NotLogin >
                <NotLoginInput placeholder="댓글을 작성하려면 로그인 해주세요" onClick={()=>{alert("네이버 로그인 하신 후 이용해 주시기 바랍니다.")}} />
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
const P =styled.p`
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