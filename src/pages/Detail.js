import React from "react";
import styled from "styled-components";
import { DetailNav, NovelInfo, Round, Comment } from "../components";
import { useDispatch , useSelector } from 'react-redux';
import product, * as productActions from "../redux/modules/product"


const Detail = (props) => {
    const dispatch = useDispatch();
    React.useEffect((params) => {
        dispatch(productActions.getProductsFB(params))},[]
        );
    
        // 리덕스 데이터 가지고 오기
    const  products = useSelector((store) => store.product.detail);
    // console.log("안녕",products)



    return (
        <div>
            <Wrap>
                <DetailNav />
                <Contents>
                    <NovelInfo />
                    <Add></Add>
                    <Round />
                    <Comment />
                </Contents>
            </Wrap>
        </div>
    );
};
const Wrap = styled.div`
    display: flex;
    width: 1110px;
    height: 1300px;
    margin: 30px auto;
`;
const Add = styled.div`
    overflow: hidden;
    background-image: url(https://ssl.pstatic.net/static/nstore/series/series_banner_v2_v3.png);
    background-size: cover;
    width: 785px;
    height: 54px;
    margin-top: 9px;
    border-radius: 2px;
`;
const Contents = styled.div`
    margin-left: 40px;
`;

export default Detail;
