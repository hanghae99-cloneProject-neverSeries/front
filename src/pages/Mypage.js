import React from "react";
import styled from "styled-components";
const Mypage = () => {
    return (
        <div>
            <Wrap>
                <Title>나의 이용정보</Title>
                <div>
                    <Mine>
                        <MyInfo1>
                            <Muffin />
                            <Text>
                                보유 중인 머핀 <Count>13</Count>
                                <Count2>개</Count2>
                            </Text>
                            <DetailBt>상세보기</DetailBt>
                        </MyInfo1>
                        <MyInfo2>
                            <Text>
                                {" "}
                                <MuffinCharge />{" "}
                                <AddText>
                                    {" "}
                                    등록하고 <strong>최대 100개</strong> 보너스
                                    받기!
                                </AddText>
                            </Text>
                            <ChargeBt>등록하기</ChargeBt>
                        </MyInfo2>
                    </Mine>
                </div>
                <div>
                    <MyBox>내보관함</MyBox>
                    <MyMenu>
                        <SmallMenu>내서재</SmallMenu>
                        <SmallMenu>구입내역</SmallMenu>
                    </MyMenu>
                </div>
                <div>
                    <Category>
                        <CategoryDetail>장르소설</CategoryDetail>
                    </Category>
                    <div>여기에 내서재 정보 뿌려줄 거</div>
                </div>
                <Notion>
                    <div>
                        <p
                            style={{
                                fontSize: "14px",
                                fontWeight: "800",
                                marginTop: "0px",
                                color: "#666",
                            }}
                        >
                            {" "}
                            이용안내{" "}
                        </p>
                        <p>
                            내서재 작품 목록과 이용가능한 회차수는 최근 30일
                            내에 구입한 콘텐츠를 기준으로 확인할 수 있습니다.
                        </p>
                        <p>
                            전체 작품은 목록 아래 ‘30일 이전에 구입한 콘텐츠
                            모두보기’를 통해 확인 가능합니다.
                        </p>
                        <p>
                            내서재 목록을 편집하시면 시리즈앱 목록에도 동시에
                            반영됩니다.
                        </p>
                        <p>
                            삭제한 항목은 휴지통에서 확인하고 복원할 수
                            있습니다.
                        </p>
                        <p>
                            일부 항목은 PC 혹은 모바일 환경에서만 사용할 수
                            있습니다.
                        </p>
                    </div>
                </Notion>
            </Wrap>
        </div>
    );
};
const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 1000px;
    margin: 50px 0px 100px 0px;
`;
const Mine = styled.div`
    display: flex;
    width: 1000px;
    margin-top: 13px;
`;
const MyInfo1 = styled.div`
    display: felx;
    padding: 22px 70px 22px 22px;
    margin: 0;
    height: 24px;
    border: 1px solid #e3e3e3;
    font-size: 14px;
    font-weight: bold;
`;
const MyInfo2 = styled.div`
    display: felx;
    padding: 22px 70px 22px 22px;
    margin: 0;
    height: 24px;
    border: 1px solid #e3e3e3;
    position: relative;
`;
const Title = styled.span`
    height: 13px;
    padding: 0 0 0 88px;
    background: url(https://ssl.pstatic.net/static/nstore/series/sp_tit_new_v2.png)
        no-repeat 0 -807px;
    color: transparent;
    font-size: 12px;
`;

const Text = styled.div`
    width: 377px;
    margin: 3px 0 0 0;
    font-size: 15px;
`;
const Muffin = styled.span`
    display: inline-block;
    width: 18px;
    height: 18px;
    background: url(https://ssl.pstatic.net/static/nstore/series/sp_split_my_v4.png)
        no-repeat -40px -19px;
    background-size: 260px 200px;
    content: "";
    margin: 3px 5px 0 0;
`;
const Count = styled.span`
    color: #04ce66;
    font-size: 18px;
`;
const Count2 = styled.span`
    color: #04ce66;
    font-size: 15px;
`;
const DetailBt = styled.button`
    border: 1px solid #e3e3e3;
    background-color: #fff;
    font-size: 12px;
    padding: 6px;
    font-weight: 200;
    margin-left: px;
`;
const MuffinCharge = styled.span`
    display: inline-block;
    width: 110px;
    height: 22px;
    content: "";
    background: url(https://ssl.pstatic.net/static/nstore/series/sp_split_my_v4.png)
        no-repeat -70px -20px;
    background-size: 250px 200px;
`;
const AddText = styled.span`
    position: relative;
    top: -5px;
    margin: 0 0 0 5px;
    font-size: 15px;
`;
const ChargeBt = styled.button`
    border: 1px solid #e3e3e3;
    background-color: #fff;
    font-size: 12px;
    padding: 6px;
    font-weight: 200;
    margin-left: px;
`;
const MyMenu = styled.div`
    display: felx;
    width: 1012px;
    height: 47px;
    background-color: #fbfbfc;
    border: 1px solid #e3e3e3;
`;
const MyBox = styled.div`
    height: auto;
    background: url(https://ssl.pstatic.net/static/nstore/series/sp_tit_new_v2.png)
        no-repeat 0 -807px;
    color: transparent;
    margin-top: 49px;
`;
const SmallMenu = styled.div`
    width: 111px;
    height: 19px;
    padding: 13px 0 15px 0;
    border-right: 1px solid #e3e3e3;
    font-size: 17px;
    font-weight: bold;
    color: #6a6a6a;
    &:hover {
        border-bottom: 2px solid #fff;
        color: #00c73c;
        background-color: white;
    }
    text-align: center;
    cursor: pointer;
`;
const Category = styled.div`
    width: 1012px;
    height: 62px;
    border-bottom: 1px solid #c8c8c8;
    position: relative;
`;
const CategoryDetail = styled.div`
    font-size: 15px;
    color: #15b21d;
    font-weight: 700;
    position: relative;
    top: 28px;
    margin-left: 30px;
`;
const Notion = styled.div`
    width: 970px;
    height: 127px;
    padding: 18px 20px 50px 20px;
    background-color: #fafafa;
    margin-top: 56px;
    font-size: 12px;
`;
export default Mypage;
