
import { Auth } from "@/components/Auth"
import PainelSettingsTemplate from "@/templates/PanelTemplate/routes/Settings"

const SettingslUser = (): JSX.Element => {
  return (
    <Auth.PrivateRouter levelAccess="user">
      <PainelSettingsTemplate />
    </Auth.PrivateRouter>
  )
}

export default SettingslUser