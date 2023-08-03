import { useContext } from "react"

import { AuthRouterContext } from "@/contexts/authRouter"
import usePanel from "@/hooks/usePanel"
import handlePermissionRoutes from "@/utils/painel/handlePermissionRoutes"

import { HeaderSettings, NavBarVertical } from "../../patterns/layout"


const Settings = (): JSX.Element => {
  usePanel()
  const { permissions, levelAccess } = useContext(AuthRouterContext)

  return (
    <>
      <HeaderSettings />
      <NavBarVertical nameRoutes={handlePermissionRoutes(permissions)} levelAccess={levelAccess}>
        <h1>Settings</h1>
      </NavBarVertical>
    </>
  )
}

export default Settings