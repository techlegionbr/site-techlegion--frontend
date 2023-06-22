

import { type TLevelAccess } from "@/queries/auth/router/types"

import Link from "next/link"
import { useRouter } from "next/router"

import routesSections from "./settings/routesSection"
import * as S from "./styles"
import { type TSectionRouteName } from "./types"


interface INavBarVerticalProps {
  children: React.ReactNode,
  nameRoutes: TSectionRouteName[],
  levelAccess: TLevelAccess
}



const NavBarVertical = ({ children, nameRoutes, levelAccess }: INavBarVerticalProps): JSX.Element => {
  const routesSelected = routesSections(levelAccess).map(routes => routes.filter(route => nameRoutes.includes(route.name)))
  const { pathname } = useRouter()
  return (
    <S.NavBarVertical>
      <div className="content">
        <div className="nav">
          {
            routesSelected.map((routes, index) => routes.length > 0 && (
              <ul key={`lista-routes-${index}`}>
                {
                  routes.map(route => (
                    <li key={route.name} className={pathname === route.href ? "current-router" : ""}>
                      <Link href={route.href}>
                        {route.icon}{route.label}
                      </Link>
                    </li>
                  ))
                }
              </ul>
            ))
          }
        </div>
        <div className="section-nav">
          {
            children
          }
        </div>
      </div>
    </S.NavBarVertical >
  )
}


export default NavBarVertical