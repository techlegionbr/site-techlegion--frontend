import { Auth } from "@/components/Auth"
import PanelUserTemplate from "@/templates/PanelTemplate/routes/Panel"

const PainelUser = (): JSX.Element => {
  return (
    <Auth.PrivateRouter levelAccess="user">
      <PanelUserTemplate />
    </Auth.PrivateRouter>
  )
}

export default PainelUser