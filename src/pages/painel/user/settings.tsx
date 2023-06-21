import PrivateRouter from "@/components/auth/PrivateRouter"
import PainelSettingsTemplate from "@/templates/Painel/Settings"

const SettingslUser = (): JSX.Element => {
  return (
    <PrivateRouter levelAccess="user">
      <PainelSettingsTemplate />
    </PrivateRouter>
  )
}

export default SettingslUser