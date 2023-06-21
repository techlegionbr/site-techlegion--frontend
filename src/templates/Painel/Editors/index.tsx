import { useContext } from "react"

import HeadTemplate from "@/components/SEO/Head"
import { AuthRouterContext } from "@/contexts/authRouter"

import { AllEditors, CreateEditor, HeaderSettings, MyEditors, NavBarVertical } from "../patterns"
import handlePermissionRoutes from "../utils/handlePermissionRoutes"

const Editors = (): JSX.Element => {
  const { permissions, levelAccess } = useContext(AuthRouterContext)

  return (
    <>
      <HeadTemplate title="Redatores - Tech Legion" />
      <HeaderSettings />
      {
        permissions && levelAccess ? (
          <NavBarVertical nameRoutes={handlePermissionRoutes(permissions)} levelAccess={levelAccess}>
            <MyEditors />
            <AllEditors />
            <CreateEditor />
          </NavBarVertical>
        ) : <></>
      }
    </>
  )
}

export default Editors