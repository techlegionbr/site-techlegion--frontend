import { type TLevelAccess } from "@/queries/auth/useAuthRouterQuery/types"
import { hostLinks } from "@/settings/links"

import { type TSectionRouteName } from "../types"

interface IRouteSection {
  icon: React.ReactNode,
  label: string,
  name: TSectionRouteName,
  href: string
}

const routesSections = (levelAccess: TLevelAccess): (IRouteSection[])[] => (
  [
    [
      {
        icon: <i className='bx bxs-dashboard'></i>,
        label: "Painel",
        name: "panel",
        href: hostLinks.painel[levelAccess === "admin" ? "admin" : "user"],
      },
      {
        icon: <i className='bx bx-news'></i>,
        label: "Posts",
        name: "posts",
        href: hostLinks.painel[levelAccess === "admin" ? "admin/posts" : "user/posts"],
      },
      {
        icon: <i className='bx bxs-comment'></i>,
        label: "Comentários",
        name: "comments",
        href: hostLinks.painel[levelAccess === "admin" ? "admin/comments" : "user/comments"]
      },
      {
        icon: <i className='bx bxs-pen'></i>,
        label: "Redatores",
        name: "editors",
        href: hostLinks.painel[levelAccess === "admin" ? "admin/editors" : "user/editors"]
      },
      {
        icon: <i className='bx bx-wrench'></i>,
        label: "Gestores",
        name: "managers",
        href: hostLinks.painel[levelAccess === "admin" ? "admin/managers" : "user/managers"]
      },
    ],
    [
      {
        icon: <i className='bx bxs-user-circle'></i>,
        label: "Perfil",
        name: "profile",
        href: hostLinks.painel[levelAccess === "admin" ? "admin/profile" : "user/profile"]
      },
      {
        icon: <i className='bx bxs-cog' ></i>,
        label: "Definições",
        name: "settings",
        href: hostLinks.painel[levelAccess === "admin" ? "admin/settings" : "user/settings"]
      },
    ]
  ]
)


export default routesSections