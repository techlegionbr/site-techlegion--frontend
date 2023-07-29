
import { Auth } from "@/components/Auth"
import PostsPainelTemplate from "@/templates/Panel/routes/Settings";

const Settings = (): JSX.Element => {
  return (
    <Auth.PrivateRouter levelAccess="admin">
      <PostsPainelTemplate />
    </Auth.PrivateRouter>
  )
}

export default Settings
