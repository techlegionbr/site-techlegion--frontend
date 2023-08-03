
import { Auth } from "@/components/Auth"
import PostsPainelTemplate from "@/templates/PanelTemplate/routes/Posts";

const Posts = (): JSX.Element => {
  return (
    <Auth.PrivateRouter levelAccess="admin">
      <PostsPainelTemplate />
    </Auth.PrivateRouter>
  )
}

export default Posts
