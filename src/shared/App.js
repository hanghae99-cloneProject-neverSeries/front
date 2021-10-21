// * react basic import
import React from "react";
import { Route, Switch } from "react-router-dom";
import axios from "axios";

// * to use redux
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configStore";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

import { Header, Footer } from "../components";

import {
    MainPage,
    LoginPage,
    SignupPage,
    Detail,
    Content,
    Mypage,
} from "../pages/index";

import { Grid } from "../elements";

function App() {
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(userActions.postLogInCheck());
    }, []);

    return (
        <React.Fragment>
            <ConnectedRouter history={history}>
                <Grid bg={"black"}>
                    <Header />
                </Grid>
                <Grid width={"100%"} fd={"column"}>
                    <Switch>
                        <Route path="/" exact component={MainPage}></Route>
                        <Route
                            path="/content"
                            exact
                            component={Content}
                        ></Route>
                        <Route path="/mypage" exact component={Mypage}></Route>
                        <Route path="/detail" exact component={Detail}></Route>
                        <Grid bg={"#f5f5f5"} width={"100%"}>
                            <Route
                                path="/login"
                                exact
                                component={LoginPage}
                            ></Route>
                            <Route
                                path="/signup"
                                exact
                                component={SignupPage}
                            ></Route>
                        </Grid>
                    </Switch>
                </Grid>
                <Grid bg={"#f5f5f5"}>
                    <Footer />
                </Grid>
            </ConnectedRouter>
        </React.Fragment>
    );
}

export default App;
