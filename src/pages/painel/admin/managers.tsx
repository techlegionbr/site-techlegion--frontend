
import { Auth } from "@/components/Auth"
import ManagersPainelTemplate from "@/templates/Painel/routes/Managers";

const Managers = (): JSX.Element => {
  return (
    <Auth.PrivateRouter levelAccess="admin">
      <ManagersPainelTemplate />
    </Auth.PrivateRouter>
  )
}

export default Managers
