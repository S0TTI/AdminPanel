import React from "react";
import { Route, Redirect } from "react-router-dom";
import { UserHaveToken, LastLocation } from "./auth";

function PrivateRoute({ component: Component, ...rest }) {

    return (
        <Route
            {...rest}
            render={props =>
                true ? (
                    (console.log("in true in privaterout", UserHaveToken),
                    <Component  {...props} />
                    )
                ) : (
                    (console.log("in flase in privaterout", UserHaveToken),
                    LastLocation(props.location), (<Redirect to="/login" />))
                )
            }
        />
    );
}

export default PrivateRoute;
