import React, { createContext } from 'react';

import { type IResponseFetchAuthRouter } from '@/queries/auth/useAuthRouterQuery/types';




export const AuthRouterContext = createContext<IResponseFetchAuthRouter>({
  levelAccess: null,
  message: "",
  permissions: []
});


interface IAuthRouterProviderProps {
  children: React.ReactNode,
  response: IResponseFetchAuthRouter
}


const AuthRouterProvider = ({ children, response }: IAuthRouterProviderProps): JSX.Element => {
  return (
    <AuthRouterContext.Provider value={response}>
      {children}
    </AuthRouterContext.Provider>
  )
}

export default AuthRouterProvider