import { useContext } from "react"


import CustomHead from "@/components/CustomHead"
import { AuthRouterContext } from "@/contexts/authRouter"
import usePanel from "@/hooks/usePanel"
import handlePermissionRoutes from "@/utils/painel/handlePermissionRoutes"

import { AllEditors, CreateEditor, MyEditors } from "../../patterns/features"
import { HeaderSettings, NavBarVertical } from "../../patterns/layout"


const Editors = (): JSX.Element => {
  usePanel()
  const { permissions, levelAccess } = useContext(AuthRouterContext)
  return (
    <>
      <CustomHead title="Redatores - Tech Legion" />
      <HeaderSettings />
      <NavBarVertical nameRoutes={handlePermissionRoutes(permissions)} levelAccess={levelAccess}>
        <MyEditors order={1} />
        <AllEditors order={2} />
        <CreateEditor order={3} />
      </NavBarVertical>
    </>
  )
}

export default Editors