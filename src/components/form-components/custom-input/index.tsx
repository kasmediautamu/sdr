import React from "react";
import "./styles.scss";

interface InputProps {
 label: string;
 name: string;
 placeholder?: string;
 isRequired?: boolean;
 error?: any;
 errorMessage?: string;
 type: "text" | "password" | "email" | "tel";
 onChange: () => void;
}

const CustomInput = (props) => {
 const {label, name, placeholder, onChange, error, errorMessage, type} = props;
 const renderTextInput = () => {
  return (
   <div className="custom-text-input">
    {label && (
     <label htmlFor="fieldlabel" className="form-label">
      {label}
     </label>
    )}
    <div className="input-group mb-3">
     <div className="input-group-prepend">
      <span className="input-group-text" id="basic-addon1">
       @
      </span>
     </div>
     <input
      type={type}
      name={name}
      className="form-control"
      placeholder={placeholder}
      onChange={onChange}
     />
    </div>

    {error && (
     <div className="input-error">
      <div className="login-error-icon"></div>
      <p className="error-msg">{errorMessage}</p>
     </div>
    )}
   </div>
  );
 };
 const renderPasswordInput = () => {
  return (
   <div className="custom-text-input">
    {label && (
     <label htmlFor="fieldlabel" className="form-label">
      {label}
     </label>
    )}
    <input
     type={type}
     name={name}
     className="form-control"
     placeholder={placeholder}
     onChange={onChange}
    />
    {error && (
     <div className="input-error">
      <div className="login-error-icon"></div>
      <p className="error-msg">{errorMessage}</p>
     </div>
    )}
   </div>
  );
 };
 return <>{type === "password" ? renderPasswordInput() : renderTextInput}</>;
};

export default CustomInput;
