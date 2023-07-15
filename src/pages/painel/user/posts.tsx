import { Auth } from "@/components/Auth"
import PainelPostsTemplate from "@/templates/Painel/routes/Posts"

const PostslUser = (): JSX.Element => {
  return (
    <Auth.PrivateRouter levelAccess="user">
      <PainelPostsTemplate />
    </Auth.PrivateRouter>
  )
}

export default PostslUser