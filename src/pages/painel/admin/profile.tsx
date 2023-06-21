import PrivateRouter from "@/components/auth/PrivateRouter";
import ProfilePainelTemplate from "@/templates/Painel/Profile";

const Profile = (): JSX.Element => {
  return (
    <PrivateRouter levelAccess="admin">
      <ProfilePainelTemplate />
    </PrivateRouter>
  )
}

export default Profile