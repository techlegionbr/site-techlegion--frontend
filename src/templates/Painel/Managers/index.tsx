import { useContext } from "react"

import HeadTemplate from "@/components/SEO/Head"
import { AuthRouterContext } from "@/contexts/authRouter"

import { HeaderSettings, MyManagers, NavBarVertical, AllManagers, CreateManager } from "../patterns"
import handlePermissionRoutes from "../utils/handlePermissionRoutes"

const Managers = (): JSX.Element => {
  const { permissions, levelAccess } = useContext(AuthRouterContext)

  return (
    <>
      <HeadTemplate title="Gestores - Tech Legion" />
      <HeaderSettings />
      {
        permissions && levelAccess ? (
          <NavBarVertical nameRoutes={handlePermissionRoutes(permissions)} levelAccess={levelAccess}>
            <MyManagers />
            <AllManagers />
            <CreateManager />
          </NavBarVertical>
        ) : <></>
      }
    </>
  )
}

export default Managers