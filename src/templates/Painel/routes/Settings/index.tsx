import { useContext } from "react"

import { AuthRouterContext } from "@/contexts/authRouter"

import { HeaderSettings, NavBarVertical } from "../../patterns/layout"
import handlePermissionRoutes from "../../utils/handlePermissionRoutes"

const Settings = (): JSX.Element => {
  const { permissions, levelAccess } = useContext(AuthRouterContext)

  return (
    <>
      <HeaderSettings />
      {
        permissions && levelAccess ? (
          <NavBarVertical nameRoutes={handlePermissionRoutes(permissions)} levelAccess={levelAccess}>
            <h1>Settings</h1>
          </NavBarVertical>
        ) : <></>
      }
    </>
  )
}

export default Settings