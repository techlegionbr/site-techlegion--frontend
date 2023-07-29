import { useContext } from "react"

import HeadTemplate from "@/components/SEO/Head"
import { AuthRouterContext } from "@/contexts/authRouter"
import usePanel from "@/hooks/usePanel"
import handlePermissionRoutes from "@/utils/painel/handlePermissionRoutes"

import { AllPosts, CreatePost, MyPosts } from "../../patterns/features"
import { HeaderSettings, NavBarVertical } from "../../patterns/layout"


const Posts = (): JSX.Element => {
  usePanel()
  const { permissions, levelAccess } = useContext(AuthRouterContext)

  return (
    <>
      <HeadTemplate title="Posts - Tech Legion" />
      <HeaderSettings />
      <NavBarVertical nameRoutes={handlePermissionRoutes(permissions)} levelAccess={levelAccess}>
        <MyPosts order={1} />
        <AllPosts order={2} />
        <CreatePost order={3} />
      </NavBarVertical>
    </>
  )
}

export default Posts