import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { DetailNav, NovelInfo, Round, Comment } from "../components";
import { actionCreators as productCreators } from "../redux/modules/product";
import { useSelector } from "react-redux";

const Detail = (props) => {
    const dispatch = useDispatch();
    const productId = props?.match?.params?.productId;
    const novel_detail = useSelector((state) => state.product.detail);

    console.log("novel_detail", novel_detail);

    useEffect(() => {
        console.log("productId", productId);
        dispatch(productCreators.getProductsFB(productId));
    }, []);

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
