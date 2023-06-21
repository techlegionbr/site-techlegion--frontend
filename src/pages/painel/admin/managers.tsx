
import PrivateRouter from "@/components/auth/PrivateRouter";
import ManagersPainelTemplate from "@/templates/Painel/Managers";

const Managers = (): JSX.Element => {
  return (
    <PrivateRouter permission="admin">
      <ManagersPainelTemplate />
    </PrivateRouter>
  )
}

export default Managers
