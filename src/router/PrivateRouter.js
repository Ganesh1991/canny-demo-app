import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      component={props =>
        isAuthenticated ? (
          <div>
            <div className="bodyComponent">
              <Component {...props} />
            </div>
          </div>
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

const mapStateToProps = ({ authentication }) => ({
  isAuthenticated: authentication.loggedIn
});

export default connect(mapStateToProps)(PrivateRoute);
