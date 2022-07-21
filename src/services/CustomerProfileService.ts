import {HTTPBaseService} from "./http-base-service";
import {Any} from "./types";

export class CustomerPlanService extends HTTPBaseService {
 constructor() {
  super("");
 }
 /**
  * get customer summary
  */
 async getProfile(req: Any, token?: string): Promise<Any> {
  let accessToken: string;
  if (!token) {
  } else {
   accessToken = token;
  }
  return this.instance.post("/user", req);
 }
}
