import { hostLinks, socialMediaLinks } from '@/settings/links';
import { type TypeHostLinkService, type TypeHostLinkMain, type TypeSocialMedia } from '@/settings/links/types';


interface TypeHostSocialMedia {
  name: TypeSocialMedia,
  icon: React.ReactElement
}

export const hostLinksSocialMedia: TypeHostSocialMedia[] = [
  {
    name: "linkedin",
    icon: <i className="bx bxl-linkedin"></i>
  },
  {
    name: "twitter",
    icon: <i className="bx bxl-twitter"></i>
  },
  {
    name: "instagram",
    icon: <i className="bx bxl-instagram-alt"></i>
  },
  {
    name: "facebook",
    icon: <i className="bx bxl-facebook"></i>
  },
  {
    name: "tiktok",
    icon: <i className="bx bxl-tiktok"></i>
  }
];

export const hostLinksSocialMediaFooter: Array<TypeHostSocialMedia & { href: string }> = hostLinksSocialMedia.map(host => ({
  ...host,
  href: socialMediaLinks[host.name]
}))


interface TypeHostService {
  name: TypeHostLinkService,
  label: string
}

export const hostLinksServices: TypeHostService[] = [
  {
    name: 'desenvolvimento-de-site',
    label: 'Desenvolvimento de Site'
  },
  {
    name: "desenvolvimento-de-pagina-de-vendas",
    label: 'Desenvolvimento de Página de Vendas'
  },
  {
    name: "desenvolvimento-de-ecommerce",
    label: 'desenvolvimento de Ecommerce'
  },
  {
    name: "desenvolvimento-de-aplicativo-mobile",
    label: 'Desenvolvimento de Aplicativo Mobile'
  },
  {
    name: "desenvolvimento-de-chatbot-e-assistente",
    label: 'Desenvolvimento de Chatbot e Assitente'
  },
  {
    name: "design-grafico",
    label: 'Design Gráfico'
  },
  {
    name: "ux-ui-design",
    label: 'UX/UI Design'
  },
  {
    name: "social-media",
    label: 'Social Media'
  },
  {
    name: "marketing-digital",
    label: 'Marketing Digital'
  },
  {
    name: "criacao-de-filtros-de-realidade-virtual",
    label: 'Criação de Filtros'
  },
  {
    name: "analise-e-ciencia-de-dados",
    label: 'Análise e Ciência de Dados'
  }
];

export const hostLinksServicesFooter: Array<TypeHostService & { href: string }> = hostLinksServices.map(host => ({
  ...host,
  href: hostLinks.services[host.name]
}))


interface TypeHostMain {
  name: TypeHostLinkMain,
  label: string
}

const hostLinksMain: TypeHostMain[] = [
  {
    name: "sobre",
    label: 'Sobre'
  },
  {
    name: "servicos",
    label: 'Serviços'
  },
  {
    name: "blog",
    label: 'Blog'
  },
  {
    name: "contato",
    label: 'Contato'
  }
];


export const hostLinksMainFooter: Array<TypeHostMain & { href: string }> = hostLinksMain.map(host => ({
  ...host,
  href: hostLinks.main[host.name]
}))