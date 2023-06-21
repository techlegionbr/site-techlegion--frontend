import { useEffect, useState } from "react"

import LoaderPage from "@/components/loaders/LoaderPage"
import Redirect from "@/components/navigation/Redirect"
import AuthRouterProvider from "@/contexts/authRouter"
import NotPermission from "@/patterns/helperScreens/NotPermission"
import useFetchAuthRouter from "@/queries/auth/router"
import { hostLinks } from "@/settings/links"

type Tpermission = "user" | "admin" | "public"

interface IPrivateRouter {
  children: React.ReactNode,
  permission: Tpermission,
  redirect?: string,
  autoEntityVerification?: boolean
}

const PrivateRouter = ({ children, permission, redirect, autoEntityVerification = false }: IPrivateRouter): JSX.Element => {
  const [fetchPermission, setIsFetchPermission] = useState<Tpermission | null>(null)
  const { data: responseVerificationAuth } = useFetchAuthRouter()

  useEffect(() => {
    if (responseVerificationAuth) {
      setIsFetchPermission(responseVerificationAuth.entity ?? "public")
    }
  }, [responseVerificationAuth])

  if (fetchPermission === null) {
    return <LoaderPage />
  }

  if (responseVerificationAuth && fetchPermission === permission) {
    return (
      <AuthRouterProvider response={responseVerificationAuth}>
        {children}
      </AuthRouterProvider>
    )
  }

  if (responseVerificationAuth && redirect) {
    return <Redirect href={redirect} />
  }

  if (responseVerificationAuth && autoEntityVerification) {
    return <Redirect href={(
      responseVerificationAuth.entity === "admin" ? hostLinks.painel.admin :
        responseVerificationAuth.entity === "user" ? hostLinks.painel.user : ""
    )} />
  }
  return <NotPermission />
}

export default PrivateRouter