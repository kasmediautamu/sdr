/**
 * login response
 */

import {Any} from "../../../services/types";
import {User} from "../../dormain/User";
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
  role: string;
  name: string;
  headPic: string;
  proxyTypes: string[];
 };
}

export interface TokenRetrieveResponse {
 token: LoginRsp;
 status: string;
 message: string;
 lastLoginTime: string;
}
