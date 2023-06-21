import { hostLinks } from "@/settings/links"

import { type TSectionRouteName } from "../types"

interface IRouteSection {
  icon: React.ReactNode,
  label: string,
  name: TSectionRouteName,
  href: string
}

const routesSections: (IRouteSection[])[] = [
  [
    {
      icon: <i className='bx bxs-dashboard'></i>,
      label: "Painel",
      name: "panel",
      href: hostLinks.painel.admin,
    },
    {
      icon: <i className='bx bx-news'></i>,
      label: "Posts",
      name: "posts",
      href: hostLinks.painel["admin/posts"],
    },
    {
      icon: <i className='bx bxs-comment'></i>,
      label: "Comentários",
      name: "comments",
      href: hostLinks.painel["admin/comments"]
    },
    {
      icon: <i className='bx bxs-pen'></i>,
      label: "Redatores",
      name: "editors",
      href: hostLinks.painel["admin/editors"]
    },
    {
      icon: <i className='bx bx-wrench'></i>,
      label: "Gestores",
      name: "managers",
      href: hostLinks.painel["admin/managers"]
    },
  ],
  [
    {
      icon: <i className='bx bxs-user-circle'></i>,
      label: "Perfil",
      name: "profile",
      href: hostLinks.painel["admin/profile"]
    },
    {
      icon: <i className='bx bxs-cog' ></i>,
      label: "Definições",
      name: "settings",
      href: hostLinks.painel["admin/settings"]
    },
  ]
]

export default routesSections