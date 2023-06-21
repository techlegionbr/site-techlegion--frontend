import PrivateRouter from "@/components/auth/PrivateRouter"
import PainelAdminTemplate from "@/templates/Painel/Admin"

const PainelAdmin = (): JSX.Element => {
  return (
    <PrivateRouter permission="admin">
      <PainelAdminTemplate />
    </PrivateRouter>
  )
}

export default PainelAdmin