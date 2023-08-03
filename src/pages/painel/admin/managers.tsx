
import { Auth } from "@/components/Auth"
import ManagersPainelTemplate from "@/templates/PanelTemplate/routes/Managers";

const Managers = (): JSX.Element => {
  return (
    <Auth.PrivateRouter levelAccess="admin">
      <ManagersPainelTemplate />
    </Auth.PrivateRouter>
  )
}

export default Managers
