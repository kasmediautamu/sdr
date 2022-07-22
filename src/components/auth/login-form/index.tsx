import React from "react";
import {Navigate, useNavigate} from "react-router-dom";
import useForm from "../../../common/hooks/useForm";

const LoginForm: React.FunctionComponent = () => {
 const [loginFail, setLoginFail] = React.useState<boolean>(false);
 const navigate = useNavigate();
 const succeedCallback = () => {
  navigate("/dashboard");
 };
 const failedCallback = () => {
  setLoginFail(true);
 };
 const formLogin = () => {
  console.log({...values, succeedCallback, failedCallback});
 };
 const {handleChange, values, errors, handleSubmit} = useForm(formLogin);

 return (
  <form onSubmit={handleSubmit} className="login-form">
   <p className="text-sdr-primary">Login</p>
  </form>
 );
};
export default LoginForm;
