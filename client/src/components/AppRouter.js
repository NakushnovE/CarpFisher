import React from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import {authRoutes, publicRoutes} from "../routes";
import {SESSION_ROUTE} from "../utils/consts";


const AppRouter = () => {
    const isAuth = false
    return (
        <Switch>
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
            )}
            <Redirect to={SESSION_ROUTE}/> //потом сделать редирект на главную
        </Switch>
    );
};

export default AppRouter;