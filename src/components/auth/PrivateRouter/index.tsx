import { useEffect, useState } from "react"

import LoaderPage from "@/components/loaders/LoaderPage"
import Redirect from "@/components/navigation/Redirect"
import useFetchTokenVerificationForAuth from "@/queries/auth/verifyTokenAuth"

type Tpermission = "user" | "admin" | "public"

interface IPrivateRouter {
  children: React.ReactNode,
  permission: Tpermission,
  redirect?: string
}

const PrivateRouter = ({ children, permission, redirect }: IPrivateRouter): JSX.Element => {
  const [fetchPermission, setIsFetchPermission] = useState<Tpermission | null>(null)
  const { data: responseVerificationAuth } = useFetchTokenVerificationForAuth()

  useEffect(() => {
    if (responseVerificationAuth) {
      setIsFetchPermission(responseVerificationAuth.entity ?? "public")
    }
  }, [responseVerificationAuth])

  if (fetchPermission === null) {
    return <LoaderPage />
  }
  if (fetchPermission === permission) {
    return <>{children}</>
  }

  if (redirect) {
    return <Redirect href={redirect} />
  }
  return <h1>Você não tem autorização</h1>
}

export default PrivateRouter