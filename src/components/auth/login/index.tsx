import React from "react";
import Back from "../../../assets/loginbackground.svg";
import LoginForm from "../login-form";
import "./styles.scss";

const Login: React.FunctionComponent = () => {
 return (
  <div className="login">
   <img src={Back} alt="" />
   <div className="login__form-wrapper">
    <LoginForm />
   </div>
  </div>
 );
};

export default Login;
