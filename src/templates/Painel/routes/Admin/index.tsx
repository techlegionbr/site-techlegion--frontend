import { useContext } from "react"


import HeadTemplate from "@/components/SEO/Head"
import { AuthRouterContext } from "@/contexts/authRouter"

import { HeaderSettings, NavBarVertical } from "../../patterns/layout"
import handlePermissionRoutes from "../../utils/handlePermissionRoutes"



const PainelAdmin = (): JSX.Element => {
  const { permissions, levelAccess } = useContext(AuthRouterContext)

  return (
    <>
      <HeadTemplate title="Painel - Tech Legion" />
      <HeaderSettings />
      {
        permissions && levelAccess ? (
          <NavBarVertical nameRoutes={handlePermissionRoutes(permissions)} levelAccess={levelAccess}>
            <h1>Painel do Gestor</h1>
          </NavBarVertical>
        ) : <></>
      }
    </>
  )
}

export default PainelAdmin