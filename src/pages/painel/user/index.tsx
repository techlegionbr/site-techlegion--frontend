import { Auth } from "@/components/Auth"
import PainelUserTemplate from "@/templates/Painel/routes/User"

const PainelUser = (): JSX.Element => {
  return (
    <Auth.PrivateRouter levelAccess="user">
      <PainelUserTemplate />
    </Auth.PrivateRouter>
  )
}

export default PainelUser