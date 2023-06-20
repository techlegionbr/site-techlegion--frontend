import Link from "next/link"

import * as S from "./styles"

interface INavBarVerticalProps {
  children: React.ReactNode
}

const NavBarVertical = ({ children }: INavBarVerticalProps): JSX.Element => {
  return (
    <S.NavBarVertical>
      <div className="content">
        <div className="nav">
          <ul>
            <li className="header-nav">
              <Link href="/">
                <i className='bx bxs-dashboard'></i>Painel
              </Link>
            </li>
            <li>
              <Link href="/">
                <i className='bx bx-news'></i>
                Posts
              </Link>
            </li>
            <li>
              <Link href="/">
                <i className='bx bxs-comment'></i>
                Comentários
              </Link>
            </li>
            <li>
              <Link href="/">
                <i className='bx bxs-pen'></i>
                Redatores
              </Link>
            </li>
            <li>
              <Link href="/">
                <i className='bx bx-wrench'></i>
                Gestores
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link href="/">
                <i className='bx bxs-user-circle'></i>
                Perfil
              </Link>
            </li>
            <li>
              <Link href="/">
                <i className='bx bxs-cog' ></i>
                Definições
              </Link>
            </li>
          </ul>
        </div>
        <div className="section-nav">
          {
            children
          }
        </div>
      </div>
    </S.NavBarVertical>
  )
}


export default NavBarVertical