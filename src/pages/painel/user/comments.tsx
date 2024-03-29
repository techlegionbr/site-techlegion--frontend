import { Auth } from "@/components/Auth"
import PainelCommentsTemplate from "@/templates/PanelTemplate/routes/Comments"

const CommentslUser = (): JSX.Element => {
  return (
    <Auth.PrivateRouter levelAccess="user">
      <PainelCommentsTemplate />
    </Auth.PrivateRouter>
  )
}

export default CommentslUser