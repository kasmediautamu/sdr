/**
 * login response
 */

import {Any} from "../../../services/types";
export type IAuthToken = Any | LoginRsp;

export type IAuthError =
 | string
 | {
    status?: number;
    error?: string;
    message: string;
   };

export interface LoginRsp {
 access_token: string;
 userInfo: {
  userId: string;
  email: string;
  planType: string;
  returns: string;
  expiration: string;
  name: string;
  isPropertySetup: boolean;
  isCompanySetup: boolean;
  isCompleteSetUp: boolean;
 };
}

export interface TokenRetrieveResponse {
 token: LoginRsp;
 status: string;
 message: string;
 lastLoginTime: string;
}
