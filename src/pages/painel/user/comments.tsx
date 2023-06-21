import PrivateRouter from "@/components/auth/PrivateRouter"
import PainelCommentsTemplate from "@/templates/Painel/Comments"

const CommentslUser = (): JSX.Element => {
  return (
    <PrivateRouter levelAccess="user">
      <PainelCommentsTemplate />
    </PrivateRouter>
  )
}

export default CommentslUser