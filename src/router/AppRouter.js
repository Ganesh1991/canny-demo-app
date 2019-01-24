import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import LoginPage from "../components/LoginPage";
import RegisterPage from "../components/RegisterPage";
import Dashboard from "../components/Dashboard";
import PublicRoute from "./PublicRouter";
import PrivateRoute from "./PrivateRouter";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PublicRoute path="/login" component={LoginPage} exact={true} />
        <PublicRoute path="/register" component={RegisterPage} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        {/* {<Route component={NotFoundPage} />}  */}
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
