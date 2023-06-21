
import PrivateRouter from "@/components/auth/PrivateRouter";
import PostsPainelTemplate from "@/templates/Painel/Settings";

const Settings = (): JSX.Element => {
  return (
    <PrivateRouter permission="admin">
      <PostsPainelTemplate />
    </PrivateRouter>
  )
}

export default Settings
