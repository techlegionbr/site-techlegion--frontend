import { useEffect, useState } from "react"

import LoaderPage from "@/components/loaders/LoaderPage"
import useFetchTokenVerificationForAuth from "@/queries/auth/verifyTokenAuth"

type Tpermission = "user" | "admin" | "public"

interface IPrivateRouter {
  children: React.ReactNode,
  permission: Tpermission
}

const PrivateRouter = ({ children, permission }: IPrivateRouter): JSX.Element => {
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
  return <h1>Você não tem autorização</h1>
}

export default PrivateRouter