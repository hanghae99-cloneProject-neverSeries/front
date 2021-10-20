import React from "react";
import styled from "styled-components";

const Muffin = (props)=>{
    // is_login이 true면 머핀 정보를 넘겨줘야해서 머핀 리턴이 두가지 타입일 예정
    
    return(
        <Wrap>
            <MuffinTitle>
                보유 중인 머핀
            </MuffinTitle>
            <MufinInfo>
                <Info>
                머핀 수를 확인해주세요.
                <LoginButtion>로그인</LoginButtion>
                </Info>
            </MufinInfo>
        </Wrap>
    )
}
const Wrap = styled.div`
width : 173px;
height : 118px;
border : solid 1px #dfdfdf;
text-align : center;
border-radius : 2px;

`
const MuffinTitle = styled.h3`
width : 173px;
border-bottom : 1px solid #ddd;
background-color : #fbfbfc;
vertical-align : middle;
font-size : 14px;
padding: 8px 0;
margin : 0px;
font-weight : 400;
`
const MufinInfo = styled.div`
width : 173px;
height : 83px;
margin : auto;
font-size : 12px;
`
const Info = styled.div`
margin-top : 10px;
`
const LoginButtion = styled.button`
width : 149px;
height: 32px;
background-color:#00c63b;
border :1px solid #00b236;
border-radius : 3px;
font-size : 14px;
color : #fff;
margin : 12px auto 10px;
font-weight: 600;
`

export default Muffin;