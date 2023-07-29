
import { Auth } from "@/components/Auth"
import PainelProfileTemplate from "@/templates/Panel/routes/Profile"

const ProfilelUser = (): JSX.Element => {
  return (
    <Auth.PrivateRouter levelAccess="user">
      <PainelProfileTemplate />
    </Auth.PrivateRouter>
  )
}

export default ProfilelUser