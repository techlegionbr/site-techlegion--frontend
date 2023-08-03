import { Auth } from "@/components/Auth"
import AuthTemplate from "@/templates/AuthTemplate"


const AuthPage = (): JSX.Element => {
  return (
    <Auth.PrivateRouter levelAccess="public" autoLevelAccessVerification>
      <AuthTemplate />
    </Auth.PrivateRouter>
  )
}

export default AuthPage