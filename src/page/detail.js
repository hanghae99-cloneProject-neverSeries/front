import React from "react";
import styled from "styled-components";
import DetailNav from "../detailComponent/DetailNav";
import NovelInfo from "../detailComponent/NovelInfo";
import Round from "../detailComponent/Round";
import Comment from "../detailComponent/Comment";


const Detail = (props)=>{
    return(
        <div>
    
        <Wrap>
               <DetailNav/>
            <Contents>
                <NovelInfo/>
                <Add></Add>
                <Round/>
                <Comment/>
            </Contents>
        </Wrap>
        </div>
    )
}
const Wrap = styled.div`
display : flex;
width : 1110px;
height : 1300px;
margin : 30px auto;

`
const Add = styled.div`
overflow: hidden;
background-image:url(https://ssl.pstatic.net/static/nstore/series/series_banner_v2_v3.png);
background-size: cover;
width : 785px;
height : 54px;
margin-top : 9px;
border-radius : 2px;
`
const Contents = styled.div`
margin-left : 40px;

`

export default Detail;