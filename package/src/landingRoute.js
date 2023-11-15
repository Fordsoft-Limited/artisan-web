import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import "./assets/scss/style.scss";
import MainLayout from "./layouts/MainLayout";
ReactDOM.render(
    <React.StrictMode>
        <HashRouter>
            <Switch>
                <Route path={`/landing`} component={MainLayout} />
            </Switch>
        </HashRouter>
    </React.StrictMode>,
    document.getElementById("root")
     
);
