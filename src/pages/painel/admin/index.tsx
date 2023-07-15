import { Auth } from "@/components/Auth"
import PainelAdminTemplate from "@/templates/Painel/routes/Admin"

const PainelAdmin = (): JSX.Element => {
  return (
    <Auth.PrivateRouter levelAccess="admin">
      <PainelAdminTemplate />
    </Auth.PrivateRouter>
  )
}

export default PainelAdmin