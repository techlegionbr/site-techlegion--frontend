import logo from "@/assets/images/logos/Logo_Tech_Legion_H_02_Blue.webp"
// import imageProfile from "@/assets/images/persons-profile/Leonardo-Ferraz.webp"

import Image from "next/image"
import Link from "next/link"

import * as S from "./styles"



const HeaderSettings = (): JSX.Element => {
  return (
    <S.HeaderSettings>
      <div className="content">
        <Link href="/" className="logo">
          <Image src={logo} width={130} alt="logo da Tech Legion" />
        </Link>
        {/* <div className="profile-settings">
          <span className="name-display">Olá, <span>Augusto</span>!</span>
          <div className="profile-image">
            <Image src={imageProfile} alt="imagem do perfil" width={40} />
          </div>
        </div> */}
      </div>
    </S.HeaderSettings>
  )
}


export default HeaderSettings