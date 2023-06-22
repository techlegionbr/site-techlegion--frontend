
import PrivateRouter from "@/components/auth/PrivateRouter";
import ManagersPainelTemplate from "@/templates/Painel/routes/Managers";

const Managers = (): JSX.Element => {
  return (
    <PrivateRouter levelAccess="admin">
      <ManagersPainelTemplate />
    </PrivateRouter>
  )
}

export default Managers
