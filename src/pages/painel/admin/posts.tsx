
import PrivateRouter from "@/components/auth/PrivateRouter";
import PostsPainelTemplate from "@/templates/Painel/Posts";

const Posts = (): JSX.Element => {
  return (
    <PrivateRouter permission="admin">
      <PostsPainelTemplate />
    </PrivateRouter>
  )
}

export default Posts
