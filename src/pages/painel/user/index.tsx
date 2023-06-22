import PrivateRouter from "@/components/auth/PrivateRouter"
import PainelUserTemplate from "@/templates/Painel/routes/User"

const PainelUser = (): JSX.Element => {
  return (
    <PrivateRouter levelAccess="user">
      <PainelUserTemplate />
    </PrivateRouter>
  )
}

export default PainelUser