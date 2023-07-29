import { useEffect, useState } from "react"

import LoaderPage from "@/components/Loader/LoaderPage"
import { Navigation } from "@/components/Navigation"
import AuthRouterProvider from "@/contexts/authRouter"
import { Page } from "@/patterns/Page"
import useAuthRouterQuery from "@/queries/auth/useAuthRouterQuery"
import { hostLinks } from "@/settings/links"
import { type TLevelAccess } from "@/types/IPermission"

type TLevelAccesAuthPrivateRouter = TLevelAccess | "public"

interface IAuthPrivateRouter {
  children: React.ReactNode,
  levelAccess: TLevelAccesAuthPrivateRouter,
  redirect?: string,
  autoLevelAccessVerification?: boolean
}

const AuthPrivateRouter = ({ children, levelAccess, redirect, autoLevelAccessVerification = false }: IAuthPrivateRouter): JSX.Element => {
  const { data: responseVerificationAuth } = useAuthRouterQuery()

  const [fetchLevelAccess, setIsFetchLevelAccess] = useState<TLevelAccesAuthPrivateRouter | null>(responseVerificationAuth?.levelAccess ?? null)

  useEffect(() => {
    if (responseVerificationAuth) {
      setIsFetchLevelAccess(responseVerificationAuth.levelAccess ?? "public")
    }
  }, [responseVerificationAuth, fetchLevelAccess])



  if (fetchLevelAccess === null) {
    return <LoaderPage />
  }
  if (responseVerificationAuth && fetchLevelAccess === levelAccess) {
    return (
      <AuthRouterProvider response={responseVerificationAuth}>
        {children}
      </AuthRouterProvider>
    )
  }
  if (responseVerificationAuth && redirect) {
    return <Navigation.Redirect href={redirect} />
  }
  if (responseVerificationAuth && autoLevelAccessVerification) {
    return <Navigation.Redirect href={(
      responseVerificationAuth.levelAccess === "admin" ? hostLinks.painel.admin :
        responseVerificationAuth.levelAccess === "user" ? hostLinks.painel.user : ""
    )} />
  }

  return <Page.NotFound />
}

export default AuthPrivateRouter