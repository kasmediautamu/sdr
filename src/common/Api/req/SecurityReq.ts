export type AuthContextType = "LOGIN" | "RESET_PASSWORD" | "FORGOT";

export interface AuthenticationReq {
 context?: AuthContextType;
 credentials: {
  email?: string;
  password?: string;
 };
}
