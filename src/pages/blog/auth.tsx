import PrivateRouter from "@/components/auth/PrivateRouter"
import AuthTemplate from "@/templates/Auth"

const Auth = (): JSX.Element => {
  return (
    <PrivateRouter permission="public">
      <AuthTemplate />
    </PrivateRouter>
  )
}

export default Auth