import React, {useState} from "react";
import {omit} from "lodash";
import {Any} from "../../services/types";

const useForm = (callback: Any) => {
 /**
  * form values
  */
 const [values, setValues] = React.useState<Any>({});
 /**
  * errors
  */
 const [errors, setErrors] = React.useState<Any>({});

 const validate = (
  event: React.FormEvent<EventTarget>,
  name: string,
  value: Any
 ) => {
  switch (name) {
   case "username":
    if (value.length <= 4) {
     // we will set the error state

     setErrors({
      ...errors,
      username: "Username atleast have 5 letters",
     });
    } else {
     // set the error state empty or remove the error for username input

     //omit function removes/omits the value from given object and returns a new object
     const newObj = omit(errors, "username");
     setErrors(newObj);
    }
    break;

   case "email":
    if (
     !new RegExp(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
     ).test(value)
    ) {
     setErrors({
      ...errors,
      email: "Enter a valid email address",
     });
    } else {
     const newObj = omit(errors, "email");
     setErrors(newObj);
    }
    break;

   case "password":
    if (
     !new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/).test(value)
    ) {
     setErrors({
      ...errors,
      password: "Be 8 charaters of uppercase, lowercase and numbers",
     });
    } else {
     const newObj = omit(errors, "password");
     setErrors(newObj);
    }
    break;

   default:
    break;
  }
 };
 /**
  *  method to handle form inputs
  */
 const handleChange = (event: React.FormEvent<EventTarget>) => {
  const target = event.target as HTMLInputElement;
  //To stop default events
  event.persist();

  const name = target.name;
  const val = target.value;

  validate(event, name, val);
  //set these values in state

  setValues({
   ...values,
   [name]: val,
  });
 };
 const handleSubmit = (event) => {
  if (event) event.preventDefault();

  if (Object.keys(errors).length === 0 && Object.keys(values).length !== 0) {
   callback();
  } else {
   alert("There is an Error!");
  }
 };
 return {
  values,
  errors,
  handleChange,
  handleSubmit,
 };
};

export default useForm;
