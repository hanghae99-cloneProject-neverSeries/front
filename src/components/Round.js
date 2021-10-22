import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as productActions } from "../redux/modules/product";
import { Text, Grid, Image, Input, Button } from "../elements/index";
// import { SiNaver } from "react-icons/fa";

const Round = (props) => {
    const dispatch = useDispatch();

    // 리덕스 데이터 가지고 오기
    const novel_detail = useSelector((state) => state.product.detail);
    const isLogin = useSelector((store) => store.user.is_login);

    const productId = novel_detail?.product?.id;
    const title = novel_detail?.product?.title;
    const Rounds = novel_detail?.product?.Rounds?.map((object) => object.round);
    const buyproduct = novel_detail?.buyproduct.map((object) => object.round);
    console.log(Rounds);

    // 보기를 누르면 페이지 이동
    const hisotry = useHistory();
    const goContent = () => {
        hisotry.push("/content");
    };

    const goBuy = (productId, round) => {
        if (!isLogin) {
            alert("로그인이 필요합니다");
            hisotry.push("/login");
        } else {
            dispatch(productActions.buyProductFB(productId, round));
            hisotry.push("/");
        }
    };

    return (
        <Grid
            fd={"column"}
            ai={"start"}
            margin={"30px 0px 0px 0px"}
            others={"max-width:782px;"}
        >
            <Grid margin={"0px 0px 10px 0px"}>
                <Text fontSize={"14px"} bold={"700"}>
                    총 {Rounds?.length}화
                </Text>
            </Grid>
            <Grid
                width={"100%"}
                fd={"column"}
                bg={"#f8f8f8"}
                height={"100%"}
                others={"border:1px solid lightgray; border-radius: 10px"}
            >
                <Grid
                    width={"100%"}
                    others={"border-bottom: 1px solid lightgray"}
                >
                    <Grid padding={"5px 16px"} width={"100%"} jc={"start"}>
                        <Text fontSize={"12px"} color={"gray"} bold={"700"}>
                            최신순 |{" "}
                            <span
                                style={{ paddingLeft: "10px", color: "black" }}
                            >
                                {" "}
                                <span style={{ color: "green" }}>✔</span>{" "}
                                1화부터
                            </span>{" "}
                            <span
                                style={{ paddingLeft: "450px", color: "black" }}
                            >
                                {" "}
                                미리보기
                            </span>{" "}
                        </Text>
                    </Grid>
                </Grid>

                {Rounds?.map((round, index) => (
                    <Grid
                        padding={"5px 16px"}
                        jc={"space-between"}
                        width={"96%"}
                        others={"border-bottom: 1px solid lightgray; "}
                        height={"35px"}
                        bg={"#fff"}
                    >
                        <Grid>
                            <Text>
                                {title}{" "}
                                <span style={{ fontWeight: "700" }}>
                                    {" "}
                                    {round}화{" "}
                                </span>{" "}
                                (2021.10.10)
                                {/* <SiNaver /> */}
                            </Text>
                        </Grid>
                        <Grid>
                            {buyproduct.includes(round) ? (
                                <Button
                                    bgColor={"#fff"}
                                    width={"80px"}
                                    height={"25px"}
                                    others={"border: 1px solid gray;"}
                                    _onClick={goContent}
                                >
                                    <Text
                                        fontSize={"13px"}
                                        bold={"700"}
                                        color={"#1b8ffc"}
                                    >
                                        보기
                                    </Text>
                                </Button>
                            ) : (
                                <Button
                                    bgColor={"#fff"}
                                    width={"80px"}
                                    height={"25px"}
                                    others={"outline: 1px solid lightgray;"}
                                    _onClick={() => goBuy(productId, round)}
                                >
                                    <Text
                                        fontSize={"13px"}
                                        bold={"700"}
                                        color={"#1b8ffc"}
                                    >
                                        구매
                                    </Text>
                                </Button>
                            )}
                        </Grid>
                    </Grid>
                ))}

                <Grid width={"100%"} padding={"10px 0px"}>
                    <Grid width={"20px"} height={"15px"}>
                        <Text fontSize={"14px"} color={"gray"}>
                            1
                        </Text>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Round;
