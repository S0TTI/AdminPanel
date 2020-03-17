import React, { Component } from "react";
import {
    HashRouter,
    BrowserHistory,
    Router,
    Route,
    Switch
} from "react-router-dom";
// import { renderRoutes } from 'react-router-config';
import "./App.scss";
import History from "./utils/History.js";
import { UserDataContext, UserHaveToken, UserToken, SERVER_URL } from "./utils/auth";
import PrivateRoute from "./utils/PrivateRoute";

const loading = () => (
    <div className="animated fadeIn pt-1 text-center">
        <br />
        <br />
        <br />
        <i className="fa fa-spinner fa-lg fa-2x fa-spin mt-4"></i>
        {"  "}
        بارگزاری...
    </div>
);

// Containers
const DefaultLayout = React.lazy(() => import("./containers/DefaultLayout"));

// Pages
const Login = React.lazy(() => import("./views/Pages/Login"));
const Register = React.lazy(() => import("./views/Pages/Register"));
const Page404 = React.lazy(() => import("./views/Pages/Page404"));
const Page500 = React.lazy(() => import("./views/Pages/Page500"));

class App extends Component {
    render() {
        return (
            <UserDataContext.Provider value={{  UHT: UserHaveToken , UT: UserToken , ServerUrl: SERVER_URL}}>
                <Router history={History}>
                    <React.Suspense fallback={loading()}>
                        <Switch>
                            <Route
                                exact
                                path="/login"
                                name="ورود"
                                render={props => <Login {...props} />}
                            />
                            <Route
                                exact
                                path="/register"
                                name="ثبت نام"
                                render={props => <Register {...props} />}
                            />
                            <Route
                                exact
                                path="/404"
                                name="صفحه 404"
                                render={props => <Page404 {...props} />}
                            />
                            <Route
                                exact
                                path="/500"
                                name="صفحه 500"
                                render={props => <Page500 {...props} />}
                            />
                            {/* <PrivateRoute
                                path="/"
                                name="خانه"
                                render={props => <DefaultLayout {...props} />}
                            /> */}
                            <PrivateRoute path="/" name="خانه" component={DefaultLayout} />
                        </Switch>
                    </React.Suspense>
                </Router>
            </UserDataContext.Provider>
        );
    }
}

export default App;
