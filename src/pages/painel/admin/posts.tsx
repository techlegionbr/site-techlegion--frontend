
import PrivateRouter from "@/components/auth/PrivateRouter";
import PostsPainelTemplate from "@/templates/Painel/Posts";

const Posts = (): JSX.Element => {
  return (
    <PrivateRouter levelAccess="admin">
      <PostsPainelTemplate />
    </PrivateRouter>
  )
}

export default Posts
