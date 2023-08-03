import { useContext } from "react"


import CustomHead from "@/components/CustomHead"
import { AuthRouterContext } from "@/contexts/authRouter"
import usePanel from "@/hooks/usePanel"
import handlePermissionRoutes from "@/utils/painel/handlePermissionRoutes"

import { HeaderSettings, NavBarVertical } from "../../patterns/layout"


const Comments = (): JSX.Element => {
  usePanel()
  const { permissions, levelAccess } = useContext(AuthRouterContext)

  return (
    <>
      <CustomHead title="Comentários - Tech Legion" />
      <HeaderSettings />
      <NavBarVertical nameRoutes={handlePermissionRoutes(permissions)} levelAccess={levelAccess}>
        <h1>Comentarios</h1>
      </NavBarVertical>
    </>
  )
}

export default Comments