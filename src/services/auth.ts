import { ILoginForm } from "../contexts/auth";

export interface IToken {
  token: string;
  user: {
    name: string;
    email: string;
  },
}

export function signIn(data: ILoginForm): Promise<IToken> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        token: '30da34aa-c7c6-11ea-87d0-0242ac130003',
        user: {
          name: 'RubensKj',
          email: 'rubenskleinschmidtjr@gmail.com'
        },
      })
    }, 2000);
  });
}