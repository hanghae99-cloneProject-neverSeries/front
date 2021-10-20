// * import Basic
import React, { useState } from "react";
import Naver_bigLogo from "../Naver_bigLogo.png";

// * import Components
import { Text, Grid, Image, Input, Button } from "../elements/index";

const SignupPage = (props) => {
    const [id, setId] = useState("");
    const [nick, setNick] = useState("");
    const [pw, setPw] = useState("");
    const [pwCheck, setPwCheck] = useState("");
    return (
        <React.Fragment>
            <Grid width={"600px"} fd={"column"} others={"min-height:60vh;"}>
                <Grid margin={"60px 0px 40px 0px"}>
                    <Image
                        src={Naver_bigLogo}
                        width={"240px"}
                        height={"45px"}
                    ></Image>
                </Grid>
                <Grid>
                    <Grid fd={"column"} ai={"start"}>
                        <Grid margin={"0px 0px 5px 0px"}>
                            <Text fontSize={"15px"} bold={"700"}>
                                아이디
                            </Text>
                        </Grid>
                        <Grid
                            width={"460px"}
                            height={"50px"}
                            bg={"#fff"}
                            margin={"0px 0px 10px 0px"}
                            placeholder={""}
                            others={
                                "border: 1px solid lightgray; padding-right:10px"
                            }
                        >
                            <Input
                                placeholder={""}
                                value={id}
                                others={"border-style:none;"}
                                _onChange={(e) => {
                                    setId(e.target.value);
                                }}
                            ></Input>
                            <Text color={"darkgray"}>@naver.com</Text>
                        </Grid>
                        <Grid margin={"0px 0px 5px 0px"}>
                            <Text fontSize={"15px"} bold={"700"}>
                                닉네임
                            </Text>
                        </Grid>
                        <Grid
                            width={"460px"}
                            height={"50px"}
                            bg={"#fff"}
                            margin={"0px 0px 10px 0px"}
                            placeholder={""}
                            others={
                                "border: 1px solid lightgray; padding-right:10px"
                            }
                        >
                            <Input
                                placeholder={""}
                                value={nick}
                                others={"border-style:none;"}
                                _onChange={(e) => {
                                    setNick(e.target.value);
                                }}
                            ></Input>
                        </Grid>
                        <Grid margin={"0px 0px 5px 0px"}>
                            <Text fontSize={"15px"} bold={"700"}>
                                비밀번호
                            </Text>
                        </Grid>
                        <Grid
                            width={"460px"}
                            height={"50px"}
                            bg={"#fff"}
                            margin={"0px 0px 10px 0px"}
                            placeholder={""}
                            others={
                                "border: 1px solid lightgray; padding-right:10px"
                            }
                        >
                            <Input
                                placeholder={""}
                                value={pwCheck}
                                others={"border-style:none;"}
                                _onChange={(e) => {
                                    setPwCheck(e.target.value);
                                }}
                            ></Input>
                        </Grid>
                        <Grid margin={"0px 0px 5px 0px"}>
                            <Text fontSize={"15px"} bold={"700"}>
                                비밀번호 재확인
                            </Text>
                        </Grid>
                        <Grid
                            width={"460px"}
                            height={"50px"}
                            bg={"#fff"}
                            margin={"0px 0px 35px 0px"}
                            placeholder={""}
                            others={
                                "border: 1px solid lightgray; padding-right:10px"
                            }
                        >
                            <Input
                                placeholder={""}
                                value={pw}
                                others={"border-style:none;"}
                                _onChange={(e) => {
                                    setPw(e.target.value);
                                }}
                            ></Input>
                        </Grid>
                        <Grid margin={"0px 0px 60px 0px"}>
                            <Button
                                width={"472px"}
                                height={"50px"}
                                bgColor={"#03c75a"}
                                placeholder={""}
                                others={
                                    "border: 1px solid lightgray; padding-right:10px"
                                }
                            >
                                <Text fontSize={"16px"} color={"#fff"}>
                                    회원 가입
                                </Text>
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default SignupPage;
