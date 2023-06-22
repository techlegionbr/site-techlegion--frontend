import PrivateRouter from "@/components/auth/PrivateRouter";
import EditorsPainelTemplate from "@/templates/Painel/routes/Editors";

const Editors = (): JSX.Element => {
  return (
    <PrivateRouter levelAccess="admin">
      <EditorsPainelTemplate />
    </PrivateRouter>
  )
}

export default Editors
