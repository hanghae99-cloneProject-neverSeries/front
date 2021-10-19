// * react basic import
import React from "react";
import { Route, Switch } from "react-router-dom";
import Detail from "../page/detail";
import Content from "../page/Content";
import Mypage from "../page/Mypage";

// * to use redux
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configStore";

function App() {
    return (
        <React.Fragment>
            <ConnectedRouter history={history}>
                <Switch>
                    <Route path="/detail" component={Detail}></Route>
                    <Route path="/content" component={Content}></Route>
                    <Route path="/mypage" component={Mypage}></Route>
                </Switch>
            </ConnectedRouter>
        </React.Fragment>
    );
}

export default App;
