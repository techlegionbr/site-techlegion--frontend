import { useEffect, useState } from "react"

import LoaderPage from "@/components/loaders/LoaderPage"
import Redirect from "@/components/navigation/Redirect"
import AuthRouterProvider from "@/contexts/authRouter"
import NotPermission from "@/patterns/helperScreens/NotPermission"
import useFetchAuthRouter from "@/queries/auth/router"
import { type TLevelAccess } from "@/queries/auth/router/types"
import { hostLinks } from "@/settings/links"

type TLevelAccesPrivateRouter = TLevelAccess | "public"

interface IPrivateRouter {
  children: React.ReactNode,
  levelAccess: TLevelAccesPrivateRouter,
  redirect?: string,
  autoLevelAccessVerification?: boolean
}

const PrivateRouter = ({ children, levelAccess, redirect, autoLevelAccessVerification = false }: IPrivateRouter): JSX.Element => {
  const [fetchLevelAccess, setIsFetchLevelAccess] = useState<TLevelAccesPrivateRouter | null>(null)
  const { data: responseVerificationAuth } = useFetchAuthRouter()

  useEffect(() => {
    if (responseVerificationAuth) {
      setIsFetchLevelAccess(responseVerificationAuth.levelAccess ?? "public")
    }
  }, [responseVerificationAuth])

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
    return <Redirect href={redirect} />
  }

  if (responseVerificationAuth && autoLevelAccessVerification) {
    return <Redirect href={(
      responseVerificationAuth.levelAccess === "admin" ? hostLinks.painel.admin :
        responseVerificationAuth.levelAccess === "user" ? hostLinks.painel.user : ""
    )} />
  }
  return <NotPermission />
}

export default PrivateRouter