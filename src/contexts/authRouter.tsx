import { createContext } from 'react';

import { type IResponseFetchVerificationTokenAuth } from '@/queries/auth/router/types';



const defaultVerify

const AuthRouterContext = createContext<IResponseFetchVerificationTokenAuth>({
  entity: null,
  message: "",
  permissions: []
});


const AuthRouterProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {

  return (
    <AuthRouterContext.Provider value={{}}>
      {children}
    </AuthRouterContext.Provider>
  )
}

export default AuthRouterProvider