import {LoginRsp} from "../common/Api/rsp/LoginRsp";
import {HTTPBaseService} from "./http-base-service";
import {Any} from "./types";

export const AUTH_LOCAL_KEY = "TA001";

export class AuthService extends HTTPBaseService {
 constructor() {
  super("");
 }
 async login(endpoint) {
  return this.instance.get(endpoint);
 }
 async authenticate(body: Any) {
  return this.instance.post("/user/login", body);
 }
 async resetPwd(endpoint): Promise<Any> {
  return this.instance.post(endpoint);
 }
 /**
  * save token
  * @param token the token
  */
 async saveToken(token: LoginRsp): Promise<LoginRsp> {
  console.log(token);

  await this.getStorage().storeData(AUTH_LOCAL_KEY, token);

  return token;
 }
}
