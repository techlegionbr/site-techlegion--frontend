import { useContext } from "react"


import CustomHead from "@/components/CustomHead"
import { AuthRouterContext } from "@/contexts/authRouter"
import usePanel from "@/hooks/usePanel"
import handlePermissionRoutes from "@/utils/painel/handlePermissionRoutes"

import { HeaderSettings, NavBarVertical } from "../../patterns/layout"





const Panel = (): JSX.Element => {
  usePanel()
  const { permissions, levelAccess } = useContext(AuthRouterContext)

  return (
    <>
      <CustomHead title="Painel - Tech Legion" />
      <HeaderSettings />
      <NavBarVertical nameRoutes={handlePermissionRoutes(permissions)} levelAccess={levelAccess}>
        <h1>Painel</h1>
      </NavBarVertical>
    </>
  )
}

export default Panel