import PrivateRouter from "@/components/auth/PrivateRouter";
import ProfilePainelTemplate from "@/templates/Painel/routes/Profile";

const Profile = (): JSX.Element => {
  return (
    <PrivateRouter levelAccess="admin">
      <ProfilePainelTemplate />
    </PrivateRouter>
  )
}

export default Profile