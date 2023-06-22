import { useContext } from "react"

import HeadTemplate from "@/components/SEO/Head"
import { AuthRouterContext } from "@/contexts/authRouter"

import { MyPosts } from "../../patterns/features"
import { HeaderSettings, NavBarVertical } from "../../patterns/layout"
import handlePermissionRoutes from "../../utils/handlePermissionRoutes"

const Posts = (): JSX.Element => {
  const { permissions, levelAccess } = useContext(AuthRouterContext)

  return (
    <>
      <HeadTemplate title="Posts - Tech Legion" />
      <HeaderSettings />
      {
        permissions && levelAccess ? (
          <NavBarVertical nameRoutes={handlePermissionRoutes(permissions)} levelAccess={levelAccess}>
            <MyPosts order={1} />
          </NavBarVertical>
        ) : <></>
      }
    </>
  )
}

export default Posts