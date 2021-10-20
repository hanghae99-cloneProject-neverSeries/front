import React from "react";
import { history } from "../redux/configStore";

import naverLogo from "../naverLogo.png";
import seriesLogo from "../seriesLogo.png";

import { Grid, Text, Button, Image } from "../elements";

// import { useSelector, useDispatch } from 'react-redux';
// import { actionCreators as userActions } from '../redux/modules/user';
// import { history } from '../redux/configStore';

// import { Grid, Button, Text, Image } from '../elements';

const Header = (props) => {
    // const dispatch = useDispatch();
    // const is_login = useSelector((state) => state.user.is_login);

    // if (is_login) {
    // 	return (
    // 		<React.Fragment>
    // 			<Grid
    // 				display
    // 				z={'5'}
    // 				jc={'space-between'}
    // 				padding={'0px 16px'}
    // 				others={
    // 					'border-bottom: 1px solid lightgray; position: sticky; top: 0px; background-color: #fff;'
    // 				}
    // 			>
    // 				<Button
    // 					bgColor={'none'}
    // 					others={'background:none;'}
    // 					_onClick={() => {
    // 						history.push('/');
    // 					}}
    // 				>
    // 					<Image
    // 						width={'7rem'}
    // 						height={'7rem'}
    // 						src={
    // 							'https://camping-img.s3.ap-northeast-2.amazonaws.com/%EB%A1%9C%EA%B3%A01.PNG'
    // 						}
    // 					></Image>
    // 				</Button>
    // 				<Grid width={'false'}>
    // 					<Button
    // 						myPage
    // 						_onClick={() => {
    // 							const tokenCheck = document.cookie;
    // 							if (!tokenCheck) {
    // 								window.alert('로그인을 먼저 해주세요');
    // 								return;
    // 							}
    // 							history.push('/mypage');
    // 						}}
    // 					></Button>
    // 					<Button
    // 						logout
    // 						_onClick={() => {
    // 							dispatch(userActions.postLogOut());
    // 						}}
    // 						others={'cursor: pointer; margin-left: 16px;'}
    // 					></Button>
    // 				</Grid>
    // 			</Grid>
    // 		</React.Fragment>
    // 	);
    // }

    return (
        <React.Fragment>
            <Grid
                display
                width={"1000px"}
                jc={"space-between"}
                padding={"20px 16px"}
                others={"position: sticky; top: 0px; z-index:2;"}
            >
                <Grid width={"150px"}>
                    <Button bgColor={"none"} others={"background:none;"}>
                        <a href="https://www.naver.com">
                            <Image
                                width={"76px"}
                                height={"14px"}
                                src={naverLogo}
                            ></Image>
                        </a>
                    </Button>
                </Grid>
                <Grid width={"100%"}>
                    <Button
                        bgColor={"none"}
                        others={"background:none;"}
                        _onClick={() => {
                            history.push("/");
                        }}
                    >
                        <Image
                            width={"128px"}
                            height={"28px"}
                            src={seriesLogo}
                        ></Image>
                    </Button>
                </Grid>
                <Grid width={"150px"}>
                    <Button
                        _onClick={() => {
                            history.push("/login");
                        }}
                        bgColor={"black"}
                    >
                        <Text fontSize={"13px"} bold={"400"} color={"#fff"}>
                            로그인
                        </Text>
                    </Button>
                    <Button
                        _onClick={() => {
                            history.push("/signup");
                        }}
                        bgColor={"black"}
                        others={"margin-left: 5px;"}
                    >
                        <Text fontSize={"13px"} bold={"400"} color={"#fff"}>
                            회원가입
                        </Text>
                    </Button>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

Header.defaultProps = {};

export default Header;
