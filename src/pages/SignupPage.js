// * import Basic
import React, { useState, useEffect } from "react";
import Naver_bigLogo from "../Naver_bigLogo.png";
import { idCheck, nickCheck, pwChk } from "../shared/regExp";

import { useDispatch, useSelector } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

// * import Components
import { Text, Grid, Image, Input, Button } from "../elements/index";

const SignupPage = ({ history }) => {
    const isLogin = useSelector((store) => store.user.is_login);
    const dispatch = useDispatch();

    const [id, setId] = useState("");
    const [nick, setNick] = useState("");
    const [pw, setPw] = useState("");
    const [pwCheck, setPwCheck] = useState("");

    useEffect(() => {
        if (isLogin) history.push("/");
    });

    const signUp = () => {
        if (id === "" || nick === "" || pw === "" || pwCheck === "") {
            window.alert("아이디,비밀번호,닉네임을 모두 입력해주세요!");
            return;
        }

        if (id.length < 5 || id.length > 12) {
            window.alert("아이디는 5자 이상 12자 이하로 작성해주세요.");
            return;
        } else if (!idCheck(id)) {
            window.alert("숫자 및 영어 소문자만 입력가능합니다.");
            return;
        }

        if (nick.length < 2 || nick.length > 10) {
            window.alert("닉네임은 2자 이상 10자 이하로 작성해주세요.");
            return;
        } else if (!nickCheck(nick)) {
            window.alert("숫자, 한글, 영어만 입력가능합니다.");
            return;
        }

        if (pw.length < 8 || pw.length > 16) {
            window.alert("비밀번호는 8자 이상 16자 이하로 작성해주세요.");
            return;
        } else if (!pwChk(pw)) {
            window.alert("특수문자를 포함한 숫자, 영어 소문자로 입력해주세요.");
            return;
        }

        if (pw !== pwCheck) {
            window.alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
            return;
        }

        dispatch(userActions.postSignup(id, nick, pw, pwCheck));
    };

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
                                others={
                                    "border-style:none; &:focus{outline:none;}"
                                }
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
                                others={
                                    "border-style:none; &:focus{outline:none;}"
                                }
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
                                type={"password"}
                                placeholder={""}
                                value={pw}
                                others={
                                    "border-style:none; &:focus{outline:none;}"
                                }
                                _onChange={(e) => {
                                    setPw(e.target.value);
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
                                type={"password"}
                                placeholder={""}
                                value={pwCheck}
                                others={
                                    "border-style:none; &:focus{outline:none;}"
                                }
                                _onChange={(e) => {
                                    setPwCheck(e.target.value);
                                }}
                            ></Input>
                        </Grid>
                        <Grid margin={"0px 0px 60px 0px"}>
                            <Button
                                _onClick={signUp}
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
