import { useContext } from "react"

import HeadTemplate from "@/components/SEO/Head"
import { AuthRouterContext } from "@/contexts/authRouter"

import { HeaderSettings, NavBarVertical, MyPosts } from "../patterns"
import handlePermissionRoutes from "../utils/handlePermissionRoutes"

const Posts = (): JSX.Element => {
  const { permissions, levelAccess } = useContext(AuthRouterContext)

  return (
    <>
      <HeadTemplate title="Posts - Tech Legion" />
      <HeaderSettings />
      {
        permissions && levelAccess ? (
          <NavBarVertical nameRoutes={handlePermissionRoutes(permissions)} levelAccess={levelAccess}>
            <MyPosts />
          </NavBarVertical>
        ) : <></>
      }
    </>
  )
}

export default Posts