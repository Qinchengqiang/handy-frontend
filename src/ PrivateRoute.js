import { Route, Redirect } from 'react-router-dom'
import React from 'react'

function PrivateRoute({ component: Component, ...rest }) { // 结构props为component和rest
    // rest is the props being passed onto Route
    return (
        <Route {...rest} render={props=>
            localStorage.getItem("_id") ? (
                <Component {...props} />
            ) : (<Redirect
                to={{
                    pathname: "/login",
                    state: { redirect: props.location.pathname } // redirecting address
                }} />
                )}
        />);
}

export default PrivateRoute;