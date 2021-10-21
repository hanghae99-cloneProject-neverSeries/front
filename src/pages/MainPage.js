// * import Basic
import React from "react";

import { FiberManualRecord } from "@material-ui/icons";
import { ArrowBackIosRounded } from "@material-ui/icons";
import { ArrowForwardIosRounded } from "@material-ui/icons";

import { useDispatch, useSelector } from "react-redux";
import { actionCreators as novelCreators } from "../redux/modules/novel";

import novelImage from "../novelImage.png";
import { history } from "../redux/configStore";

// * import Components
import { Text, Grid, Image, Button } from "../elements/index";

const MainPage = (props) => {
    const dispatch = useDispatch();
    const [_novels, setNovels] = React.useState([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
    ]);

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
                        {_novels.map((novel, idx) => {
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
                                                                color={"white"}
                                                                others={
                                                                    "text-align:center;margin-bottom:-3px;"
                                                                }
                                                            >
                                                                25화
                                                            </Text>
                                                            <Text
                                                                color={"white"}
                                                                others={
                                                                    "text-align:center; margin-top:-3px;"
                                                                }
                                                            >
                                                                무료
                                                            </Text>
                                                        </Grid>
                                                        <Image
                                                            src={
                                                                "https://comicthumb-phinf.pstatic.net/20210730_276/pocket_1627613694939781YL_JPEG/_%284%29.jpg?type=m260"
                                                            }
                                                            width={"150px"}
                                                            height={"225px"}
                                                        ></Image>
                                                    </Grid>
                                                    <Grid
                                                        fd={"column"}
                                                        margin={
                                                            "0px -10px 0px 0px"
                                                        }
                                                    >
                                                        <Text
                                                            fontSize={"15px"}
                                                            bold={"700"}
                                                        >
                                                            {novel_list?.title}
                                                        </Text>
                                                        <Text
                                                            fontSize={"13px"}
                                                            color={"darkgray"}
                                                        >
                                                            비가
                                                        </Text>
                                                        <Text fontSize={"13px"}>
                                                            ⭐️⭐️⭐️⭐️⭐️{" "}
                                                            <span
                                                                style={{
                                                                    fontSize:
                                                                        "14px",
                                                                    fontWeight:
                                                                        "700",
                                                                }}
                                                            >
                                                                8.7
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
                    <Grid controller>
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
