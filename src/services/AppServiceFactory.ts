import {HTTPBaseService} from "./http-base-service";
import {Any} from "./types";
/**
 * Api service factory
 */

export class ASF {
 static _instances: Any = {};

 static getService<T extends HTTPBaseService>(type: new () => T): T {
  const newInstance = new type();
  const key = (newInstance as Any).prefix;
  let instance = this._instances[key];
  if (!instance) {
   ASF._instances = newInstance;
   instance = newInstance;
  }
  return instance as T;
 }
}
