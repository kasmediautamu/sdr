import {AUTH_LOCAL_KEY, AuthService} from "../../services/AuthService";
import * as types from "../auth/auth.actions";
import {IAuthError, IAuthToken} from "../../common/Api/rsp/LoginRsp";
import {storageService} from "../../common/Util";
import {IFormView} from "./auth.actions";
export interface IAuthState {
 token: IAuthToken | null;
 forceRedirect: boolean | null;
 loading: boolean | null;
 error: IAuthError | null;
 form: IFormView;
}

const getDefaultState = (): IAuthState => {
 const cached = window.localStorage.getItem(AUTH_LOCAL_KEY);
 const token = cached ? (JSON.parse(cached) as IAuthToken) : null;

 return {
  token,
  forceRedirect: !!token && !token.redirectionRequired,
  loading: null,
  error: null,
  form: "login",
 };
};

export default (
 state = getDefaultState(),
 action: types.AuthActionTypes
): IAuthState => {
 switch (action.type) {
  case types.SET_FORM:
   return {
    ...state,
    form: action.payload.form,
   };
  case types.LOGIN:
   return {
    ...state,
    token: null,
    loading: true,
    error: null,
   };
  case types.LOGIN_SUCCESS:
   storageService.storeData(AUTH_LOCAL_KEY, action.payload.token);
   //  ASF.getService(AuthService).saveToken(action.payload.token);
   return {
    ...state,
    token: action.payload.token,
    loading: false,
    error: null,
   };
  case types.LOGIN_ERROR:
   return {
    ...state,
    token: null,
    loading: false,
    error: action.payload.error,
   };
  case types.LOGOUT:
   window.localStorage.removeItem(AUTH_LOCAL_KEY);
   return getDefaultState();
  default:
   return state;
 }
};
