import { Auth } from "@/components/Auth"
import ProfilePainelTemplate from "@/templates/Panel/routes/Profile";

const Profile = (): JSX.Element => {
  return (
    <Auth.PrivateRouter levelAccess="admin">
      <ProfilePainelTemplate />
    </Auth.PrivateRouter>
  )
}

export default Profile