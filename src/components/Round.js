import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

const Round = (props)=>{

    //회차 리스트 뿌려 줄 것 
const Round = ["1화","2화","3화","4화","5화","6화","7화","8화","9화","10화","11화","12화","13화","14화","15화","16화","17화","18화","19화","20화","21화","22화","23화","24화","25화","26화","27화","28화","29화","30화"];
    // 타이틀 리스트 뿌려 줄 것
const [tilte,setTtitle]=React.useState("서브남주가 너무 많아![독점]");
    // 서브타이틀 리스트 뿌려 줄 것 
const [subtitle,setSubtitle]=React.useState(" 누가 남주니?");

    // 보기를 누르면 페이지 이동
const hisotry = useHistory();
const goContent = ()=>{
    hisotry.push("/content")
}

    return(
        <div>
            <RoundInfo> 총 106{}화</RoundInfo>
            <RoundHeader>
                <Button>최신순</Button>
                <Button>1화부터</Button>
            </RoundHeader>
            <RoundBox>
                <Table border="1" summary ="소설 회차 데이터 리스트">
                    <tbody>
                    {Round.map((round,indeex)=>(
                            <Tr>
                            <Th></Th>
                            <Td>
                                 <div>
                                    <span> {tilte}
                                       <strong> {round}. {subtitle} (1)</strong>
                                    </span>
                                    <Date>(2021.10.10)</Date>
                                    <NEW>New</NEW>
                                </div>
                             </Td>
                             <Td>
                                 <div>
                                     <Prevw>미리보기</Prevw>
                                 </div>
                             </Td>
                             <ButtonTd>
                                 <ViewButton onClick={goContent}>보기</ViewButton>
                             </ButtonTd>
                            </Tr>
                    ))}

                    </tbody>
                </Table>
            </RoundBox>
            <RoundBottom>
                <Paging>
                <A href= "#">이전</A>
                <A href= "#">1</A>
                <A href= "#">2</A>
                <A href= "#">3</A>
                <A href= "#">4</A>
                <A href= "#">다음</A>
                </Paging>
            </RoundBottom>
        </div>
    )
}

const RoundInfo = styled.p`
margin : 30px 0 10px 0;
font-size : 14px;
font-weight : bold;
`
const RoundHeader = styled.div`
width : 780px;
height : 26px;
border : 1px solid #cfcfcf;
background-color : #fbfbfc;
border-radius : 2px;
padding-top : 8px;
`
const RoundBox = styled.div`
width : 780px;
height: 1107px;
border-left: 1px solid #cfcfcf;
border-right: 1px solid #cfcfcf;
`
const RoundBottom = styled.div`
display :flex;
width :  780px;
height: 26px;
border: 1px solid #cfcfcf;
background-color : #fbfbfc;
border-radius : 2px;
padding : 10px auto 9px auto;
`
const Button = styled.button`
border : none;
background-color : #fbfbfc;
cursor : pointer;
font-size : 12px;
font-weight : 800;
color : grey;
`
const Paging = styled.div`
text-align : center;
width : 782px;
height: 20px;
`
const A = styled.div`
text-decoration : none;
display : inline;
cursor : pointer;
width : 32px;
height: 25px;
border :  1px solid grey;
margin 0 3px;
`
const Td = styled.td`
border : none;
border-bottom : 1px solid #e1e1e1;
padding-left : 20px;
font-size : 12px;
`
const Th = styled.th`
border : none;
`
const Tr = styled.tr`
width: 782px;
height: 36px;
`
const Table = styled.table`
width : 782px;
height: 1110px;
border-spacing: 0;
`
const NEW = styled.span`
width :  12px;
height : 14px;
background :url(https://ssl.pstatic.net/static/nstore/series/sp_sub_common_new_v35.png) no-repeat -341px -556px;
color : transparent;
margin-left : 5px;
`
const Date = styled.span`
font-weight : 300px
`
const Prevw = styled.span`
display : inline-block;
overflow : hidden;
width : 15px;
height : 13px;
background: url(https://ssl.pstatic.net/static/nstore/series/sp_sub_common_new_v35.png) no-repeat -316px -1157px;;
margin-top: -5px;
color : transparent;
`
const ViewButton = styled.div`
width : 70px;
height : 15px;
border : 1px solid #eee;
color: #1b8ffc;
text-align :  center;
padding : 4px 5px;
border-radius : 2px;
cursor : pointer;
margin-top : -5px;
fonst-size :10px;
`
const ButtonTd = styled.td`
width : 90px;
border-bottom : 1px solid #e1e1e1;
font-weight : 600;
`
export default Round;