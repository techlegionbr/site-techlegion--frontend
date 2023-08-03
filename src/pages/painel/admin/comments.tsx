import { Auth } from "@/components/Auth"
import CommentsPainelTemplate from "@/templates/PanelTemplate/routes/Comments";

const Comments = (): JSX.Element => {
  return (
    <Auth.PrivateRouter levelAccess="admin" >
      <CommentsPainelTemplate />
    </Auth.PrivateRouter>
  )
}

export default Comments
