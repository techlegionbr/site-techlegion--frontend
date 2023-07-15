import { type TypeHostOurValues, type TypeHostLinkMain, type TypeHostLinkService, type TypeHostLinks, type TypeLinks, type TypeHostLinkPainel } from "./types";
import generateRoutes from "./utils/generateRoutes";

export const socialMediaLinks: TypeLinks = {
  linkedin: 'https://www.linkedin.com/company/techlegionbr/',
  twitter: 'https://twitter.com/techlegionbr',
  instagram: 'https://www.instagram.com/techlegionbr/',
  facebook: 'https://www.facebook.com/techlegionbr',
  tiktok: 'https://www.tiktok.com/@techlegionbr',
  whatsapp: "https://api.whatsapp.com/send?phone=555180276708&text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Tech%20Legion%20e%20gostaria%20de%20maiores%20informa%C3%A7%C3%B5es.",
  email: "mailto:contato@techlegion.com.br"
};


export const hostLinks: TypeHostLinks = {
  painel: {
    ...generateRoutes<TypeHostLinkPainel>([
      "admin",
      "user",
      "admin/posts",
      "admin/comments",
      "admin/editors",
      "admin/managers",
      "user/posts",
      "user/comments",
      "user/editors",
      "user/managers",
      "user/posts",
      "admin/settings",
      "admin/profile",
      "user/settings",
      "user/profile"
    ], "/painel")
  },
  main: {
    ...generateRoutes<TypeHostLinkMain>([
      "sobre",
      "servicos",
      "blog",
      "vender-mais",
      "contato",
      "politica-de-privacidade",
      "termos-de-uso"
    ]),
    "início": "/",
  },
  services: {
    ...generateRoutes<TypeHostLinkService>([
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
    ...generateRoutes<TypeHostOurValues>([
      "#diversidade-e-inclusao",
      "#impacto-social"
    ], "/sobre")
  }
}