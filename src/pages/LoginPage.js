// * import Basic
import React, { useEffect, useState } from "react";
import { actionCreators as userActions } from "../redux/modules/user";
import { useSelector, useDispatch } from "react-redux";
import Naver_bigLogo from "../Naver_bigLogo.png";

// * import Components
import { Text, Grid, Image, Input, Button } from "../elements/index";

const LoginPage = ({ history }) => {
    const isLogin = useSelector((store) => store.user.is_login);

    const dispatch = useDispatch();
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");

    useEffect(() => {
        if (isLogin) history.push("/");
    });

    const login = (e) => {
        if (id === "" || pw === "") {
            window.alert("아이디, 비밀번호를 모두 입력해주세요!");
            return;
        }

        dispatch(userActions.postLogIn(id, pw));
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
                                비밀번호
                            </Text>
                        </Grid>
                        <Grid
                            width={"460px"}
                            height={"50px"}
                            bg={"#fff"}
                            margin={"0px 0px 35px 0px"}
                            placeholder={""}
                            others={
                                "border: 1px solid lightgray; padding-right:10px;"
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
                        <Grid margin={"0px 0px 60px 0px"}>
                            <Button
                                _onClick={() => {
                                    login();
                                }}
                                width={"472px"}
                                height={"50px"}
                                bgColor={"#03c75a"}
                                placeholder={""}
                                others={
                                    "border: 1px solid lightgray; padding-right:10px"
                                }
                            >
                                <Text fontSize={"16px"} color={"#fff"}>
                                    로그인하기
                                </Text>
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default LoginPage;
