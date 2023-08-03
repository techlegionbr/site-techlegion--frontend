
import { Auth } from "@/components/Auth"
import PainelProfileTemplate from "@/templates/PanelTemplate/routes/Profile"

const ProfilelUser = (): JSX.Element => {
  return (
    <Auth.PrivateRouter levelAccess="user">
      <PainelProfileTemplate />
    </Auth.PrivateRouter>
  )
}

export default ProfilelUser