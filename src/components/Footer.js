import React from "react";
import { Grid, Text } from "../elements";

const Footer = () => {
    return (
        <Grid
            fd={"column"}
            width={"1000px"}
            others={"border-top:1px solid lightgray"}
        >
            <Grid fd={"column"} padding={"16px"}>
                <Text
                    color={"#444"}
                    fontSize={"12px"}
                    others={"text-align:center;"}
                >
                    <p>
                        네이버웹툰 | 이용약관 |{" "}
                        <span style={{ fontWeight: "700" }}>
                            {" "}
                            개인정보 처리방침{" "}
                        </span>{" "}
                        <span style={{ color: "gray" }}> | </span>청소년보호정책
                        <span style={{ color: "gray" }}> | </span>시리즈
                        고객센터<span style={{ color: "gray" }}> | </span>
                        톡톡상담<span style={{ color: "gray" }}> | </span>웹툰
                        사업문의<span style={{ color: "gray" }}> | </span>
                        네이버페이 약관
                        <span style={{ color: "gray" }}> | </span>전용상품권
                        이용약관
                    </p>
                    <p style={{ color: "gray" }}>
                        시리즈에서 판매되는 콘텐츠의 저작권은 제공처에 있으며,
                        이를 무단 이용하는 경우 저작권법 등에 따라 처벌될 수
                        있습니다.
                    </p>
                    <p>
                        <span style={{ color: "gray" }}> 사업자등록번호</span>{" "}
                        669-86-01888{" "}
                        <span style={{ color: "gray" }}>
                            통신판매업 신고번호
                        </span>
                        2020-성남분당B-0719 (사업자정보 확인){" "}
                        <span style={{ color: "gray" }}>대표이사</span> 김준구
                        <br />
                        <span style={{ color: "gray" }}>주소</span> 경기도
                        성남시 분당구 분당내곡로 117, 9층 (백현동, 크래프톤
                        타워) <span style={{ color: "gray" }}>고객센터</span>{" "}
                        1588-3820 <span style={{ color: "gray" }}>이메일</span>
                        ccnaver@naver.com
                    </p>
                    <p style={{ fontWeight: "700" }}>© NAVER WEBTOON Limited</p>
                    <p>
                        네이버 이용약관
                        <span style={{ color: "gray" }}> | </span>책임의 한계와
                        법적고지<span style={{ color: "gray" }}> | </span>네이버
                        고객센터<span style={{ color: "gray" }}> | </span>
                        결제문의<span style={{ color: "gray" }}> | </span>
                        저작권침해신고<span style={{ color: "gray" }}> | </span>
                        결제도용신고<span style={{ color: "gray" }}> | </span>
                        <span style={{ fontWeight: "700" }}>© NAVER CORP.</span>
                    </p>
                </Text>
            </Grid>
            <Grid width={"710px"} padding={"0px 16px 40px 16px"} fd={"column"}>
                <Grid padding={"16px"}>
                    <Text color={"black"} fontSize={"1.5rem"} bold={"700"}>
                        항해99 - 4조 clone coding
                    </Text>
                </Grid>
                <Grid
                    padding={"16px 0px"}
                    others={"border-top: 1px solid #7e7d7d;"}
                >
                    <Grid ai={"start"} others={"margin-right: 50px;"}>
                        <Grid margin={"0px 10px 0px 0px"}>
                            <Text bold={700}>Frontend</Text>
                        </Grid>
                        <Text>
                            https://github.com/hanghae99-cloneProject-neverSeries/backend.git
                            <br />
                            윤진선 정혜원
                        </Text>
                    </Grid>
                    <Grid ai={"start"}>
                        <Grid margin={"0px 10px 0px 0px"}>
                            <Text bold={700}>Backend</Text>
                        </Grid>
                        <Text>
                            https://github.com/hanghae99-cloneProject-neverSeries/front.git
                            <br />
                            김영우 김정호 신성웅
                        </Text>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Footer;
