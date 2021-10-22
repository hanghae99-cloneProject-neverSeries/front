// * import Basic
import React from "react";
import Slider from "react-slick";

import { FiberManualRecord } from "@material-ui/icons";
import { ArrowBackIosRounded } from "@material-ui/icons";
import { ArrowForwardIosRounded } from "@material-ui/icons";

import { useDispatch, useSelector } from "react-redux";
import { actionCreators as novelCreators } from "../redux/modules/novel";

import { history } from "../redux/configStore";

// * import Components
import { Text, Grid, Image, Button } from "../elements/index";

const MainPage = (props) => {
    const dispatch = useDispatch();

    const novel_list = useSelector((state) => state.novel.list.result);

    console.log("123", novel_list);

    React.useEffect(() => {
        dispatch(novelCreators.getNovel());
    }, []);

    return (
        <React.Fragment>
            <Grid width={"1000px"} fd={"column"} padding={"15px 0px 25px 0px"}>
                <Grid height={"100%"} width={"100%"}>
                    <Grid>
                        <ArrowBackIosRounded
                            style={{
                                color: "#b9b9ba",
                                fontSize: "50px",
                                background: "#fff",
                            }}
                        />
                    </Grid>
                    <Grid
                        width="900px"
                        jc={"space-between"}
                        others={"flex-wrap:wrap;"}
                        padding={"0px 16px 20px 16px"}
                        margin={"0px 0px 0px -15px"}
                    >
                        {novel_list?.length > 0 &&
                            novel_list.map((novel, idx) => {
                                return (
                                    <Grid margin={"0px"}>
                                        <ul
                                            style={{
                                                listStyleType: "none",
                                                margin: "0px",
                                                padding: "0px",
                                            }}
                                        >
                                            <li>
                                                <Grid margin={"20px 0px"}>
                                                    <Button
                                                        fd={"column"}
                                                        bgColor={"#fff"}
                                                        others={"padding:0px;"}
                                                        _onClick={() => {
                                                            history.push(
                                                                `/detail/${novel.id}`
                                                            );
                                                        }}
                                                    >
                                                        <Grid
                                                            margin={
                                                                "0px 0px 16px 0px"
                                                            }
                                                        >
                                                            <Grid
                                                                width={"50px"}
                                                                height={"50px"}
                                                                bg={"#50bef9"}
                                                                margin={
                                                                    "-200px -35px 0px 0px"
                                                                }
                                                                others={
                                                                    "border-radius:30px; border:1px solid #4babdf;"
                                                                }
                                                                fd={"column"}
                                                            >
                                                                <Text
                                                                    color={
                                                                        "white"
                                                                    }
                                                                    others={
                                                                        "text-align:center;margin-bottom:-3px;"
                                                                    }
                                                                >
                                                                    10화
                                                                </Text>
                                                                <Text
                                                                    color={
                                                                        "white"
                                                                    }
                                                                    others={
                                                                        "text-align:center; margin-top:-3px;"
                                                                    }
                                                                >
                                                                    무료
                                                                </Text>
                                                            </Grid>
                                                            <Image
                                                                src={
                                                                    novel.imgURL
                                                                }
                                                                width={"150px"}
                                                                height={"225px"}
                                                                others={
                                                                    "border:1px solid lightgray;"
                                                                }
                                                            ></Image>
                                                        </Grid>
                                                        <Grid
                                                            fd={"column"}
                                                            margin={
                                                                "0px -10px 0px 0px"
                                                            }
                                                        >
                                                            <Text
                                                                fontSize={
                                                                    "15px"
                                                                }
                                                                bold={"700"}
                                                                others={
                                                                    "white-space: nowrap; width: 150px; overflow: hidden; text-overflow: ellipsis;"
                                                                }
                                                            >
                                                                {novel.title}
                                                            </Text>

                                                            <Text
                                                                fontSize={
                                                                    "13px"
                                                                }
                                                                color={
                                                                    "darkgray"
                                                                }
                                                            >
                                                                {
                                                                    novel.bookInfo.split(
                                                                        " "
                                                                    )[2]
                                                                }
                                                            </Text>
                                                            <Text
                                                                fontSize={
                                                                    "13px"
                                                                }
                                                            >
                                                                {Number(
                                                                    novel.star
                                                                ) < 3 && "⭐️"}
                                                                {Number(
                                                                    novel.star
                                                                ) >= 3 &&
                                                                    Number(
                                                                        novel.star
                                                                    ) < 5 &&
                                                                    "⭐️⭐️"}
                                                                {Number(
                                                                    novel.star
                                                                ) >= 5 &&
                                                                    Number(
                                                                        novel.star
                                                                    ) < 7 &&
                                                                    "⭐️⭐️⭐️"}
                                                                {Number(
                                                                    novel.star
                                                                ) >= 7 &&
                                                                    Number(
                                                                        novel.star
                                                                    ) < 9 &&
                                                                    "⭐️⭐️⭐️⭐️"}
                                                                {Number(
                                                                    novel.star
                                                                ) >= 9 &&
                                                                    Number(
                                                                        novel.star
                                                                    ) < 11 &&
                                                                    "⭐️⭐️⭐️⭐️⭐️"}
                                                                <span
                                                                    style={{
                                                                        fontSize:
                                                                            "14px",
                                                                        fontWeight:
                                                                            "700",
                                                                    }}
                                                                >
                                                                    {novel.star}
                                                                </span>
                                                            </Text>
                                                        </Grid>
                                                    </Button>
                                                </Grid>
                                            </li>
                                        </ul>
                                    </Grid>
                                );
                            })}
                    </Grid>
                    <Grid>
                        <ArrowForwardIosRounded
                            style={{
                                color: "#b9b9ba",
                                fontSize: "50px",
                                background: "#fff",
                            }}
                        />
                    </Grid>
                </Grid>

                <Grid>
                    <FiberManualRecord
                        style={{
                            color: "#1b8ffc",
                            fontSize: "12px",
                            background: "#fff",
                        }}
                    />
                    <FiberManualRecord
                        style={{
                            color: "#e1e1e1",
                            fontSize: "12px",
                            background: "#fff",
                        }}
                    />
                    <FiberManualRecord
                        style={{
                            color: "#e1e1e1",
                            fontSize: "12px",
                            background: "#fff",
                        }}
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default MainPage;
