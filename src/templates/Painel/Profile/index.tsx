import { useContext } from "react"

import HeadTemplate from "@/components/SEO/Head"
import { AuthRouterContext } from "@/contexts/authRouter"

import { HeaderSettings, NavBarVertical } from "../patterns"
import handlePermissionRoutes from "../utils/handlePermissionRoutes"

const Profile = (): JSX.Element => {
  const { permissions, levelAccess } = useContext(AuthRouterContext)

  return (
    <>
      <HeadTemplate title="Gestores - Tech Legion" />
      <HeaderSettings />
      {
        permissions && levelAccess ? (
          <NavBarVertical nameRoutes={handlePermissionRoutes(permissions)} levelAccess={levelAccess}>
            <h1>Perfil</h1>
          </NavBarVertical>
        ) : <></>
      }
    </>
  )
}

export default Profile