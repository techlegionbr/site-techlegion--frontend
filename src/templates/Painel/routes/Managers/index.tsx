import { useContext } from "react"

import HeadTemplate from "@/components/SEO/Head"
import { AuthRouterContext } from "@/contexts/authRouter"

import { AllManagers, CreateManager, MyManagers } from "../../patterns/features"
import { HeaderSettings, NavBarVertical } from "../../patterns/layout"
import handlePermissionRoutes from "../../utils/handlePermissionRoutes"

const Managers = (): JSX.Element => {
  const { permissions, levelAccess } = useContext(AuthRouterContext)

  return (
    <>
      <HeadTemplate title="Gestores - Tech Legion" />
      <HeaderSettings />
      {
        permissions && levelAccess ? (
          <NavBarVertical nameRoutes={handlePermissionRoutes(permissions)} levelAccess={levelAccess}>
            <MyManagers order={1} />
            <AllManagers order={2} />
            <CreateManager order={3} />
          </NavBarVertical>
        ) : <></>
      }
    </>
  )
}

export default Managers