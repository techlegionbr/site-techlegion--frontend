import { useContext } from "react"

import { AuthRouterContext } from "@/contexts/authRouter"

import HeaderSettings from "../patterns/HeaderSettings"
import NavBarVertical from "../patterns/NavBarVertical"
import handlePermissionRoutes from "../utils/handlePermissionRoutes"

const Posts = (): JSX.Element => {
  const { permissions } = useContext(AuthRouterContext)

  return (
    <>
      <HeaderSettings />
      {
        permissions && (
          <NavBarVertical nameRoutes={handlePermissionRoutes(permissions)}>
            <h1>Posts</h1>
          </NavBarVertical>
        )
      }
    </>
  )
}

export default Posts