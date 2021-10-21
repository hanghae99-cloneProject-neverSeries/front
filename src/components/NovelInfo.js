import React from "react";
import styled from "styled-components";
import { useDispatch , useSelector } from 'react-redux';
import * as productActions from "../redux/modules/product"


const NovelInfo = (props)=>{
    const dispatch = useDispatch();
    React.useEffect((params) => {
        dispatch(productActions.getProductsFB(params))},[]
        );
    
    // 리덕스 데이터 가지고 오기
    const  products = useSelector((store) => store.product.detail);
    console.log("안녕",products?.bookInfo)

    // bookInfo 잘라서 사용하기 (split 함수 이용)
    const bookInfoD = products?.bookInfo
    console.log(bookInfoD)
    const bookInfoArr = bookInfoD?.split(" ")
    console.log(bookInfoArr?.[4])

    return(
        <Wrap>
            {/* 소설 타이틀 & 작가 정보 */}
            <Div> <ClockImg/>  {products?.title} </Div>
            <Rating> 
                <StarBox><EmptyStar><Star/></EmptyStar><div style = {{marginLeft :"5px"}}>9.1</div> </StarBox>
                <InterestUl>
                    <Interest>관심</Interest>
                    <Interest>하트</Interest>
                    <Interest>댓글</Interest>
                    <Interest>공유</Interest>
                </InterestUl>
            </Rating>
            <Ul>
                <Li><Span>{bookInfoArr?.[0]}</Span>  </Li>
                <Li> {bookInfoArr?.[1]}ㅣ </Li>
                <Li> 글  <span>{bookInfoArr?.[2]}</span>ㅣ</Li>
                <Li>출판사   <span>{bookInfoArr?.[3]}</span>ㅣ</Li>
                <Li>{bookInfoArr?.[4]}</Li>
            </Ul>
            <Info>{products?.description}</Info>
            <div>
                <H4>eBook 가격정보</H4>
                <HowMuch>
                <Mine>소장</Mine>
                <Muffin> 머핀 <Span>1{}</Span> 개 </Muffin>
                <Mine2> 소장 </Mine2>
                </HowMuch>
            </div>

        </Wrap>
    )
}
const Wrap = styled.div`
width : 784px;
height : auto;
padding : 24px 20px 0 0;
`
const Li = styled.li`
display : inline-block;
margin : 0px 3px;
`
const Ul = styled.ul`
padding : 8px 0 7px 0;
border-top : 1px solid #dadada;
border-bottom : 1px solid #dadada;
`
const HowMuch = styled.div`
display : flex;
width : 784px;
height: 62px;
border : 1px solid #dfdfdf;
border-radius :2px;
`
const Mine = styled.div`
width : 59px;
text-align : center;
padding : 20px 0px;
border-right : 1px solid #dfdfdf;
font-size : 13px;
font-weight :  800;
background-color :  #fbfbfc;
`
const Muffin = styled.div`
width : 650px;
padding : 20px 0 20px 17px;
font-size : 16px;
font-weight : bold;
`
const H4 = styled.h4`
font-size : 14px;
margin-bottom : 5px;
`
const Span = styled.span`
color: #30c835;
font-weight: bold;
`
const Mine2 = styled.div`
padding : 20px 0;
font-size :  13px;
`
const ClockImg = styled.div`
display : felx;
overflow: hidden;
background-image:url(https://ssl.pstatic.net/static/nstore/series/freepass/ico_daily_free_30.png);
background-size: cover;
width : 30px;
height : 30px;
margin-right: 8px; 
`
const Div=styled.div`
display : flex;
font-size : 28px;
font-weight: normal;
`
const Rating = styled.div`
display : felx;
width : 782px;
height: 20px;
padding: 21px 0 0 0;
`
const StarBox = styled.div`
display :  felx;
width : 136px;
height : 19px;
font-size : 15px;
font-weight: bold;
`
const Interest = styled.li`
display : inline-block;
margin : 0 6px;
font-size : 12px;
color : #333;
font-weight : 600;
`
const InterestUl = styled.ul`
width : 192px;
height: 18px;
margin : 0;
`
const Star = styled.div`
display: inline-block;
width : 91px;
height: 19px;
background: url(https://ssl.pstatic.net/static/nstore/series/sp_sub_common_new_v35.png) no-repeat -380px -1185px;
overflow: hidden;
margin-right : 5px;
`
const EmptyStar = styled.div`
display: block;
width : 81px;
height: 17px;
position : relative;
overflow: hidden;
margin-right : 5px;
background: url(https://ssl.pstatic.net/static/nstore/series/sp_sub_common_new_v35.png) no-repeat -286px -1185px;
`
const Info = styled.div`
font-size : 13px;
`
export default NovelInfo;