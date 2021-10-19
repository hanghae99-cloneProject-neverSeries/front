import React from "react";
import styled from "styled-components";

const Comment = (props)=>{
    return(
        <div>
        <P>댓글 321</P>
        <Wrap>
            
            <div>
            <Input placeholder = "스포성 댓글이나 악플은 삭제될 수 있습니다." rows="5" cols="90"/>
            </div>
            <Upload>
                <button>등록</button>
            </Upload>
        </Wrap>
        </div>
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
export default Comment;