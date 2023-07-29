import { Auth } from "@/components/Auth"
import EditorsPainelTemplate from "@/templates/Panel/routes/Editors";

const Editors = (): JSX.Element => {
  return (
    <Auth.PrivateRouter levelAccess="admin">
      <EditorsPainelTemplate />
    </Auth.PrivateRouter>
  )
}

export default Editors
