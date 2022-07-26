import React from "react";
import {Link, useNavigate} from "react-router-dom";
import useForm from "../../../common/hooks/useForm";
import AtSvg from "../../../assets/at.svg";
import LockSvg from "../../../assets/lock.svg";
import EyeSvg from "../../../assets/eye.svg";
import "./styles.scss";

const LoginForm = () => {
 const [loginFail, setLoginFail] = React.useState<boolean>(false);
 const [isRemember, setIsRemembered] = React.useState<boolean>(false);
 const navigate = useNavigate();
 const succeedCallback = () => {
  navigate("/dashboard");
 };
 const failedCallback = () => {
  setLoginFail(true);
 };
 const formLogin = () => {
  console.log({...values, isRemember, succeedCallback, failedCallback});
 };
 const {handleChange, values, errors, handleSubmit} = useForm(formLogin);

 return (
  <form onSubmit={handleSubmit} className="login-form">
   <p className="text-sdr-cloud-burst">Login</p>
   <p className="text-sdr-summer-sky ">Welcome back, sign in to continue</p>
   <div className="sdr-form-control">
    <label htmlFor="" className="sdr-form-control-label">
     Email Adress
    </label>
    <div className="sdr-input-wrapper">
     <div className="input-group-prepend">
      <span className="input-group-text" id="input-icon1">
       <img src={AtSvg} alt="" />
      </span>
     </div>
     <input
      type="text"
      className="form-control"
      placeholder="johndoe@company.com"
      name="email"
      onChange={handleChange}
     />
    </div>
   </div>
   <div className="sdr-form-control">
    <label htmlFor="" className="sdr-form-control-label">
     Password
    </label>
    <div className="sdr-input-wrapper">
     <div className="input-group-prepend">
      <span>
       <img src={LockSvg} alt="" />
      </span>
     </div>
     <input
      type="text"
      className="form-control"
      placeholder="Password"
      name="password"
      onChange={handleChange}
     />
     <div className="input-group-append">
      <span>
       <img src={EyeSvg} alt="" />
      </span>
     </div>
    </div>
   </div>
   <div className="sdr-remember-row">
    <div className="sdr-checkbox">
     <input
      className="form-check-input"
      type="checkbox"
      id="inlineCheckbox3"
      value="remember"
      name="isRemember"
      onChange={() => setIsRemembered(true)}
     />
     <label className="form-check-label" htmlFor="inlineCheckbox3">
      Remember me
     </label>
    </div>
    <Link to={"/forgot-password"} className="forgot-link">
     Forgot Password?
    </Link>
   </div>
   <button type="submit">Sign In</button>
   <p className="sdr-create-link">
    Dont have an account yet?
    <Link to={"/sign-up"}>
     <span>Sign up</span>
    </Link>
   </p>
   {errors?.email && <p className="text-danger">{errors.email}</p>}
   {errors?.password && <p className="text-danger">{errors.password}</p>}
   <div className="text-center">
    <div className="spinner-border text-success " role="status"></div>
   </div>
  </form>
 );
};
export default LoginForm;
