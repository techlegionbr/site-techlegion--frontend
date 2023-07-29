
import { Auth } from "@/components/Auth"
import PostsPainelTemplate from "@/templates/Panel/routes/Posts";

const Posts = (): JSX.Element => {
  return (
    <Auth.PrivateRouter levelAccess="admin">
      <PostsPainelTemplate />
    </Auth.PrivateRouter>
  )
}

export default Posts
