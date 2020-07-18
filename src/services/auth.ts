import { ILoginForm } from "../contexts/auth";
import api from "./api";

export interface IToken {
  data: {
    id: string;
    uuid: string;
    userDTO: {
      email: string;
      authorities: string[];
      enabled: boolean;
    },
  }
}

export function signIn(data: ILoginForm): Promise<IToken> {
  return api.post('/auth/login', data);
}