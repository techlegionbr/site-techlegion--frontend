import { useContext } from "react"


import { AuthRouterContext } from "@/contexts/authRouter"

import HeaderSettings from "../patterns/HeaderSettings"
import NavBarVertical from "../patterns/NavBarVertical"
import handlePermissionRoutes from "../utils/handlePermissionRoutes"



const PainelAdmin = (): JSX.Element => {
  const { permissions } = useContext(AuthRouterContext)

  return (
    <>
      <HeaderSettings />
      {
        permissions && (
          <NavBarVertical nameRoutes={handlePermissionRoutes(permissions)}>
            <h1>Painel Admin</h1>
          </NavBarVertical>
        )
      }
    </>
  )
}

export default PainelAdmin