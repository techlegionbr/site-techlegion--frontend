import { type TypeHostOurValues, type TypeHostLinkMain, type TypeHostLinkService, type TypeHostLinks, type TypeLinks, type TypeHostLinkPainel } from "./types";
import generateRoutes from "./utils/generateRoutes";

export const socialMediaLinks: TypeLinks = {
  linkedin: 'https://www.linkedin.com/company/techlegionbr/',
  twitter: 'https://twitter.com/techlegionbr',
  instagram: 'https://www.instagram.com/techlegionbr/',
  facebook: 'https://www.facebook.com/techlegionbr',
  tiktok: 'https://www.tiktok.com/@techlegionbr',
  whatsapp: "https://api.whatsapp.com/send?phone=555180276708",
  email: "mailto:contato@techlegion.com.br"
};


export const hostLinks: TypeHostLinks = {
  painel: {
    ...generateRoutes<Record<TypeHostLinkPainel, string>>([
      "admin",
      "user"
    ], "painel")
  },
  main: {
    "início": "/",
    ...generateRoutes<Omit<Record<TypeHostLinkMain, string>, "início">>([
      "sobre",
      "servicos",
      "blog",
      "contato",
      "politica-de-privacidade",
      "termos-de-uso"
    ])
  },
  services: {
    ...generateRoutes<Record<TypeHostLinkService, string>>([
      "analise-e-ciencia-de-dados",
      "criacao-de-filtros-de-realidade-virtual",
      "desenvolvimento-de-aplicativo-mobile",
      "desenvolvimento-de-chatbot-e-assistente",
      "desenvolvimento-de-ecommerce",
      "desenvolvimento-de-pagina-de-vendas",
      "desenvolvimento-de-site",
      "design-grafico",
      "gestao-de-trafego",
      "marketing-digital",
      "social-media",
      "ux-ui-design"
    ], "/servicos")
  },
  ourValues: {
    ...generateRoutes<Record<TypeHostOurValues, string>>([
      "#diversidade-e-inclusao",
      "#impacto-social"
    ], "/sobre")
  }
}