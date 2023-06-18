import PrivateRouter from "@/components/auth/PrivateRouter"
import PainelUserTemplate from "@/templates/Painels/User"

const PainelUser = (): JSX.Element => {
  return (
    <PrivateRouter permission="user">
      <PainelUserTemplate />
    </PrivateRouter>
  )
}

export default PainelUser