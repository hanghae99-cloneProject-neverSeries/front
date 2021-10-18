// * react basic import
import React from "react";
import { Route, Switch } from "react-router-dom";

// * to use redux
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configStore";

function App() {
    return (
        <React.Fragment>
            <ConnectedRouter history={history}>
                <Switch>
                    <Route></Route>
                </Switch>
            </ConnectedRouter>
        </React.Fragment>
    );
}

export default App;
