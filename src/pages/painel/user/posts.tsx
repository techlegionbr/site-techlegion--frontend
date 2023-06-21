import PrivateRouter from "@/components/auth/PrivateRouter"
import PainelPostsTemplate from "@/templates/Painel/Posts"

const PostslUser = (): JSX.Element => {
  return (
    <PrivateRouter levelAccess="user">
      <PainelPostsTemplate />
    </PrivateRouter>
  )
}

export default PostslUser