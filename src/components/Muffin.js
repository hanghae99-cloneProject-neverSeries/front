import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as muffinActions } from "../redux/modules/user";

const Muffin = (props) => {
    const dispatch = useDispatch();
    const isLogin = useSelector((store) => store.user.is_login);
    const novel_detail = useSelector((state) => state.product.detail);

    const history = useHistory();

    const goLogin = () => {
        history.push("/login");
    };
    const addMuffin = () => {
        dispatch(muffinActions.addMuffin(15));
    };

    const myMuffin = novel_detail?.myMuffin;

    return isLogin ? (
        <LoginMuffin>
            <MuffinTitle>보유 중인 머핀</MuffinTitle>
            <MufinInfo style={{ borderBottom: "solid 1px #dfdfdf" }}>
                <Info>
                    <SmallBox>
                        <div style={{ display: "flex" }}>
                            <MuffinImage></MuffinImage>
                            <MyIfo>{myMuffin}개</MyIfo>
                        </div>
                    </SmallBox>
                    <LoginButtion onClick={addMuffin}>충전하기</LoginButtion>
                    <div style={{ marginTop: "13px" }}>
                        <AddImage></AddImage>
                        <Text>
                            <stron>최대 100개</stron>보너스 머핀 받기
                        </Text>
                    </div>
                </Info>
            </MufinInfo>
        </LoginMuffin>
    ) : (
        <Wrap>
            <MuffinTitle>보유 중인 머핀</MuffinTitle>
            <MufinInfo>
                <Info>
                    머핀 수를 확인해주세요.
                    <LoginButtion onClick={goLogin}>로그인</LoginButtion>
                </Info>
            </MufinInfo>
        </Wrap>
    );
};
const Wrap = styled.div`
    width: 173px;
    height: 118px;
    border: solid 1px #dfdfdf;
    text-align: center;
    border-radius: 2px;
`;
const MuffinTitle = styled.h3`
    width: 173px;
    border-bottom: 1px solid #ddd;
    background-color: #fbfbfc;
    vertical-align: middle;
    font-size: 14px;
    padding: 8px 0;
    margin: 0px;
    font-weight: 400;
`;
const MufinInfo = styled.div`
    width: 173px;
    height: 83px;
    margin: auto;
    font-size: 12px;
`;
const Info = styled.div`
    margin-top: 10px;
`;
const LoginButtion = styled.button`
    width: 149px;
    height: 32px;
    background-color: #00c63b;
    border: 1px solid #00b236;
    border-radius: 3px;
    font-size: 14px;
    color: #fff;
    margin: 12px auto 10px;
    font-weight: 600;
    cursor: pointer;
`;

const LoginMuffin = styled.div`
    width: 173px;
    height: 190px;
    border: solid 1px #dfdfdf;
    text-align: center;
    border-radius: 2px;
`;
const MyIfo = styled.p`
    font-size: 16px;
    font-weight: bold;
    margin: 0;
`;
const MuffinImage = styled.span`
    display: inline-block;
    width: 14px;
    height: 14px;
    background: url(https://ssl.pstatic.net/static/nstore/series/img/sp_home_divide_v6.png)
        no-repeat -240px -50px;
    background-size: 400px 300px;
    margin: 2px 2px 0 0;
    color: transparents;
`;
const SmallBox = styled.div`
    width: 60px;
    text-align: center;
    margin: auto;
`;
const AddImage = styled.span`
    width: 90px;
    height: 20px;
    display: inline-block;
    background: url(https://ssl.pstatic.net/static/nstore/series/img/sp_home_divide_v6.png)
        no-repeat 0 -265px;
    background-size: 400px 300px;
    content: "";
`;
const Text = styled.p`
    margin: 0;
`;
export default Muffin;
