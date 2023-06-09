import PrivateRouter from "@/components/auth/PrivateRouter"
import PainelAdminTemplate from "@/templates/Painel/routes/Admin"

const PainelAdmin = (): JSX.Element => {
  return (
    <PrivateRouter levelAccess="admin">
      <PainelAdminTemplate />
    </PrivateRouter>
  )
}

export default PainelAdmin