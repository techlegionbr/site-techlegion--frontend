import { Auth } from "@/components/Auth"
import PanelAdminTemplate from "@/templates/Panel/routes/Panel"

const PainelAdmin = (): JSX.Element => {
  return (
    <Auth.PrivateRouter levelAccess="admin">
      <PanelAdminTemplate />
    </Auth.PrivateRouter>
  )
}

export default PainelAdmin