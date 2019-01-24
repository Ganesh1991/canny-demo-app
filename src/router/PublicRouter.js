import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import Footer from "../components/Footer";

export const PublicRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    component={props =>
      isAuthenticated ? (
        <Redirect to="/home" />
      ) : (
        <React.Fragment>
          <Component {...props} />
        </React.Fragment>
      )
    }
  />
);

const mapStateToProps = ({ authentication }) => ({
  isAuthenticated: authentication.loggedIn
});

export default connect(mapStateToProps)(PublicRoute);
