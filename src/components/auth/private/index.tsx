import React, {ReactNode} from "react";
import {Navigate, useLocation} from "react-router-dom";
import "./styles.scss";

const PrivateRoute = ({children}: any) => {
 const isAuthenticated = true;
 const location = useLocation();

 return isAuthenticated ? (
  children
 ) : (
  <Navigate to="/" state={{from: location}} replace />
 );
};

export default PrivateRoute;
