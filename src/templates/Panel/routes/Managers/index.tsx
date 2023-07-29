import { useContext } from "react"

import HeadTemplate from "@/components/SEO/Head"
import { AuthRouterContext } from "@/contexts/authRouter"
import usePanel from "@/hooks/usePanel"
import handlePermissionRoutes from "@/utils/painel/handlePermissionRoutes"

import { AllManagers, CreateManager, MyManagers } from "../../patterns/features"
import { HeaderSettings, NavBarVertical } from "../../patterns/layout"


const Managers = (): JSX.Element => {
  usePanel()
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