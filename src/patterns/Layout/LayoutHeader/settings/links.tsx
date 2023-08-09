import { hostLinks } from "@/settings/links"
import { type TypeHostLinkMain } from "@/settings/links/types"

interface TypeRouteInternal {
  name: TypeHostLinkMain,
  label: string
}

const hostLinksMain: TypeRouteInternal[] = [
  {
    name: "início",
    label: "Início"
  },
  {
    name: "sobre",
    label: "Sobre"
  },
  {
    name: "servicos",
    label: "Serviços"
  },
  {
    name: "vender-mais",
    label: "Vender Mais"
  },
  {
    name: "blog",
    label: "Blog"
  },
  {
    name: "contato",
    label: "Contato"
  }
]

export const hostLinksMainHeader: Array<TypeRouteInternal & { href: string }> = hostLinksMain.map(host => ({
  ...host,
  href: hostLinks.main[host.name]
}))