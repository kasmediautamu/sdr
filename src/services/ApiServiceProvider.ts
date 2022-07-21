import {Any} from "./types";
import {BaseStorageService} from "./BaseStorageService";
/**
 * service provider for web
 */
export class ApiServiceProvider {
 static _storageService: BaseStorageService;
 /**
  * storage service
  * @param bs the service
  */
 static setStorageService(bs: BaseStorageService) {
  ApiServiceProvider._storageService = bs;
 }
 /**
  * get storage service
  */
 static getStorageService() {
  console.log(ApiServiceProvider._storageService);
  return ApiServiceProvider._storageService;
 }
}
