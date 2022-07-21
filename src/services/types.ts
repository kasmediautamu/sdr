/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
export type Any = any;

/**
 * response body
 */

export interface ResponseBody<T> {
 body: T;
 status: ResponseStatus;
}

export interface ResponseStatus {
 code: string;
 errorCode?: string;
 message?: string;
}
