import {IAuthError, LoginRsp} from "../../common/Api/rsp/LoginRsp";
import {User} from "../../common/dormain/User";
import {storageService} from "../../common/Util";
import {ASF} from "../../services/AppServiceFactory";
import {AuthService} from "../../services/AuthService";
import {Any} from "../../services/types";
import {AppThunk} from "../constants";

export const LOGOUT = "[AUTH] LOGOUT";
export const LOGIN = "[AUTH] LOGIN";
export const LOGIN_SUCCESS = "[AUTH] LOGIN_SUCCESS";
export const LOGIN_ERROR = "[AUTH] LOGIN_ERROR";
export const SET_FORM = "[AUTH] SET_FORM";

export type IFormView = "login" | "forgotpass" | "resetpass";

export const API_AUTH_USER_KEY = "TA354242";
export interface ILoginAction {
 type: typeof LOGIN;
}
export interface ISetFormAction {
 type: typeof SET_FORM;
 payload: {
  form: IFormView;
 };
}
export interface ILoginSuccessAction {
 type: typeof LOGIN_SUCCESS;
 payload: {
  token: Any;
 };
}

export interface ILogoutAction {
 type: typeof LOGOUT;
}
export interface ILoginErrorAction {
 type: typeof LOGIN_ERROR;
 payload: {
  error: IAuthError;
 };
}

export const login =
 ({
  email,
  password,
  succeedCallback,
  failedCallback,
 }: {
  email: string;
  password: string;
  succeedCallback: () => void;
  failedCallback: () => void;
 }): AppThunk =>
 (dispatch) => {
  dispatch({type: LOGIN});
  const params = {email, password};
  ASF.getService(AuthService)
   .authenticate(params)
   .then(async (rsp: Any) => {
    const {data} = rsp;
    console.log(data);
    await afterLogin(data);

    dispatch(loginSuccess(data.accessToken));
    succeedCallback();
   })
   .catch((e) => {
    console.log(e);
    dispatch(loginError(e));
    failedCallback();
   });
 };

export const afterLogin = async (loginRsp: LoginRsp) => {
 return await storageService.storeData(API_AUTH_USER_KEY, {
  userId: loginRsp.userInfo.userId,
  email: loginRsp.userInfo.email,
  planType: loginRsp.userInfo.planType,
  returns: loginRsp.userInfo.returns,
  expiration: loginRsp.userInfo.expiration,
  name: loginRsp.userInfo.name,
  isPropertySetup: loginRsp.userInfo.isPropertySetup,
  isCompanySetup: loginRsp.userInfo.isCompanySetup,
  isCompleteSetUp: loginRsp.userInfo.isCompleteSetUp,
 } as User);
};

export const loginSuccess = (token: Any): ILoginSuccessAction => ({
 type: LOGIN_SUCCESS,
 payload: {token},
});

export const loginError = (errorContent: string): ILoginErrorAction => {
 let error: Any;
 try {
  error = JSON.parse(errorContent);
 } catch (e) {
  error = errorContent;
 }
 return {
  type: LOGIN_ERROR,
  payload: {
   error,
  },
 };
};

export const setForm = (form: IFormView): ISetFormAction => {
 return {
  type: SET_FORM,
  payload: {
   form,
  },
 };
};

export type AuthActionTypes =
 | ILoginAction
 | ILoginErrorAction
 | ILoginSuccessAction
 | ILogoutAction
 | ISetFormAction;
