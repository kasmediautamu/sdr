import axios, {AxiosError, AxiosInstance, AxiosRequestConfig} from "axios";
import {ApiServiceProvider} from "../ApiServiceProvider";
import {Any} from "../types";
interface RefreshToken {
 status: number;
 data: {
  hashToken: string;
 };
}

export abstract class HTTPBaseService {
 protected instance: AxiosInstance;
 protected rawInstance: AxiosInstance;
 protected token: string;
 protected readonly baseURL = process.env.REACT_APP_BASEURL;
 protected prefix: string;
 protected host: string;

 public constructor(prefix: string, host?: string, token?: string) {
  const baseURL = host || this.baseURL + prefix;
  this.instance = axios.create({
   baseURL,
  });
  this.rawInstance = axios.create({});
  if (token) {
   this.token = token;
  }

  this.initializeRequestInterceptor();
  this.initializeResponseInterceptor();
 }

 protected getStorage() {
  return ApiServiceProvider.getStorageService();
 }

 private initializeRequestInterceptor = () => {
  this.instance.interceptors.request.use(this.handleRequest);
 };
 private initializeResponseInterceptor = () => {
  this.instance.interceptors.response.use((response) => {
   if (response.headers && response.headers.authorization) {
    const responseToken = (response.headers.authorization as string).split(
     " "
    )[1];
    this.token = responseToken;

    localStorage.setItem("hashToken", this.token);
   }
   return response;
  }, this.handleError);
 };

 private handleRequest = (config: AxiosRequestConfig) => {
  config.headers["Authorization"] = `Bearer ${this.token}`;
  return config;
 };

 private handleError = async (error: AxiosError) => {
  const originalRequest = error.config;
  if (error.response?.status === 401) {
   const refreshToken = await this.refreshToken();
   if (refreshToken.status === 200) {
    this.token = refreshToken.data.hashToken;
    localStorage.setItem("hashToken", this.token);
    return this.instance(originalRequest);
   }
  }
 };

 private async refreshToken(): Promise<RefreshToken> {
  const refreshTokenRequest = {
   hashToken: this.token,
  };
  const {data} = await this.addRequestOptionsForClientSecret();
  const options: AxiosRequestConfig = {
   headers: {
    CLIENT_KEY: data.clientKey,
   },
  };

  return axios.post(
   `${this.baseURL}/User/RenewToken`,
   refreshTokenRequest,
   options
  );
 }
 private addRequestOptionsForClientSecret() {
  return axios.get(`${this.baseURL}/utility/getsecret`);
 }
}
