import PrivateRouter from "@/components/auth/PrivateRouter";
import EditorsPainelTemplate from "@/templates/Painel/Editors";

const Editors = (): JSX.Element => {
  return (
    <PrivateRouter permission="admin">
      <EditorsPainelTemplate />
    </PrivateRouter>
  )
}

export default Editors
