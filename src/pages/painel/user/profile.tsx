import PrivateRouter from "@/components/auth/PrivateRouter"
import PainelProfileTemplate from "@/templates/Painel/Profile"

const ProfilelUser = (): JSX.Element => {
  return (
    <PrivateRouter levelAccess="user">
      <PainelProfileTemplate />
    </PrivateRouter>
  )
}

export default ProfilelUser