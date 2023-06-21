import PrivateRouter from "@/components/auth/PrivateRouter";
import CommentsPainelTemplate from "@/templates/Painel/Comments";

const Comments = (): JSX.Element => {
  return (
    <PrivateRouter levelAccess="admin" >
      <CommentsPainelTemplate />
    </PrivateRouter>
  )
}

export default Comments